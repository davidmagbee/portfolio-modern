const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const Module = require('node:module');
// Compile the real route in memory; stub only external HTTP to avoid sending mail.
const compiled = ts.transpileModule(fs.readFileSync('pages/api/contact.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const route = new Module('contact');
route._compile(compiled, 'contact.cjs');
const handler = route.exports.default;
const valid = { name: 'Recruiter', email: 'recruiter@example.com', subject: 'Role & team', message: 'Hello\n世界', website: '', token: 'valid-token' };
const env = { RESEND_API_KEY: 'test', CONTACT_FROM_EMAIL: 'portfolio@example.com', CONTACT_TO_EMAIL: 'owner@example.com', TURNSTILE_SECRET_KEY: 'secret', CONTACT_SITE_ORIGIN: 'https://example.com' };
Object.assign(process.env, env);
async function request(body = valid, method = 'POST', headers = {}) {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(value) { this.body = value; return this; } };
  await handler({ method, headers: { 'content-type': 'application/json', origin: 'https://example.com', ...headers }, body }, res);
  return res;
}
test('contact API contract and failure isolation', async (t) => {
  const original = global.fetch;
  t.after(() => { global.fetch = original; });
  let calls;
  function mock(verify = { success: true, hostname: 'example.com', action: 'contact' }, send = { id: 'email-id' }, sendOk = true) {
    calls = [];
    global.fetch = async (url, options) => {
      calls.push({ url, body: JSON.parse(options.body) });
      return { ok: calls.length === 1 || sendOk, json: async () => calls.length === 1 ? verify : send };
    };
  }
  await t.test('method, media type, fields, honeypot, and token fail before external requests', async () => {
    mock();
    assert.equal((await request(valid, 'GET')).code, 405);
    assert.equal((await request(valid, 'POST', { 'content-type': 'text/plain' })).code, 415);
    for (const body of [null, [], { ...valid, name: ' ' }, { ...valid, email: 'bad' }, { ...valid, subject: 'a\r\nb' }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, website: 'spam' }, { ...valid, token: '' }]) {
      assert.equal((await request(body)).code, 400);
    }
    assert.equal(calls.length, 0);
  });
  await t.test('configuration and origin fail closed', async () => {
    mock();
    delete process.env.RESEND_API_KEY;
    assert.equal((await request()).code, 503);
    Object.assign(process.env, env);
    assert.equal((await request(valid, 'POST', { origin: 'https://attacker.example' })).code, 403);
    assert.equal(calls.length, 0);
  });
  await t.test('failed, replayed, wrong-host and wrong-action verification cannot send mail', async () => {
    for (const verification of [{ success: false }, { success: true, hostname: 'other.example', action: 'contact' }, { success: true, hostname: 'example.com', action: 'other' }]) {
      mock(verification);
      assert.equal((await request()).code, 400);
      assert.equal(calls.length, 1);
    }
  });
  await t.test('success uses fixed recipient and visitor reply-to with plain Unicode text', async () => {
    mock();
    const res = await request({ ...valid, to: 'attacker@example.com' });
    assert.equal(res.code, 200);
    assert.equal(res.headers['Cache-Control'], 'no-store');
    assert.deepEqual(calls[1].body.to, ['owner@example.com']);
    assert.equal(calls[1].body.reply_to, valid.email);
    assert.ok(calls[1].body.text.includes(valid.message));
    assert.equal(calls[1].body.html, undefined);
  });
  await t.test('provider failure or missing receipt cannot claim success', async () => {
    mock(undefined, { message: 'private provider detail' }, false);
    assert.equal((await request()).code, 502);
    mock(undefined, {});
    assert.equal((await request()).code, 502);
    global.fetch = async () => { throw new Error('private credentials'); };
    const res = await request();
    assert.equal(res.code, 502);
    assert.ok(!JSON.stringify(res.body).includes('private'));
  });
});
