import type { NextApiRequest, NextApiResponse } from "next";

export const config = { api: { bodyParser: { sizeLimit: "16kb" } } };
const unavailable = "Message could not be confirmed. Please try again or email david.magbee@me.com.";

/** Keep delivery credentials, recipient selection, and bot verification server-side. */
export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Use POST." });
  }
  if (req.headers["content-type"]?.split(";")[0] !== "application/json") {
    return res.status(415).json({ error: "Send JSON." });
  }
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ error: "Please check the form fields." });
  }
  const limits = { name: 100, email: 254, subject: 200, message: 5000 };
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = body[key];
    if (typeof value !== "string" || !value.trim() || value.length > limit) {
      return res.status(400).json({ error: "Please check the form fields and their length." });
    }
    fields[key] = value.trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.name + fields.subject)) {
    return res.status(400).json({ error: "Please check your email, name, and subject." });
  }
  // Reject the honeypot without making a paid provider request or claiming delivery.
  if (body.website !== "" || typeof body.token !== "string" || !body.token || body.token.length > 2048) {
    return res.status(400).json({ error: "Please complete spam verification and try again." });
  }
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, TURNSTILE_SECRET_KEY, CONTACT_SITE_ORIGIN } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL || !TURNSTILE_SECRET_KEY || !CONTACT_SITE_ORIGIN) {
    return res.status(503).json({ error: unavailable });
  }
  try {
    const origin = new URL(CONTACT_SITE_ORIGIN);
    if (req.headers.origin !== origin.origin) {
      return res.status(403).json({ error: "Please submit from the portfolio website." });
    }
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: TURNSTILE_SECRET_KEY, response: body.token }),
      signal: AbortSignal.timeout(8000),
    });
    const result = await verification.json();
    if (!verification.ok || !result.success || result.hostname !== origin.hostname || result.action !== "contact") {
      return res.status(400).json({ error: "Spam verification expired or failed. Please verify again." });
    }
    // Plain text avoids HTML injection; visitor addresses are Reply-To, never From.
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject: `Portfolio: ${fields.subject}`,
        text: `From: ${fields.name} <${fields.email}>\n\n${fields.message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const accepted = await delivery.json();
    if (!delivery.ok || typeof accepted.id !== "string" || !accepted.id) {
      return res.status(502).json({ error: unavailable });
    }
    // Provider acceptance is not an assertion of inbox delivery.
    return res.status(200).json({ message: "Message accepted. Thank you for reaching out." });
  } catch {
    // Do not expose provider responses, credentials, or visitor content in logs/errors.
    return res.status(502).json({ error: unavailable });
  }
}
