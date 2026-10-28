import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = { name: string; email: string; subject: string; message: string; website: string };
type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<Inputs>();
  const [token, setToken] = useState("");
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState({ error: false, text: "" });
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string>();
  const pending = useRef(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Explicit lifecycle prevents duplicate widgets during React remounts/navigation.
  useEffect(() => {
    if (!ready || !siteKey || !container.current || !window.turnstile) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "contact", theme: "dark", size: "flexible",
      callback: (value: string) => { setToken(value); },
      "expired-callback": () => setToken(""),
      "error-callback": () => {
        setToken("");
        setNotice({ error: true, text: "Spam verification is unavailable. Reload or use the email link." });
      },
    });
    return () => {
      if (widget.current) window.turnstile?.remove(widget.current);
      widget.current = undefined;
    };
  }, [ready, siteKey]);

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    if (pending.current) return;
    if (!token) {
      setNotice({ error: true, text: "Please complete spam verification before sending." });
      return;
    }
    pending.current = true;
    setNotice({ error: false, text: "Sending your message…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }), signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Message could not be confirmed. Please try again or use the email link.");
      setNotice({ error: false, text: "Message accepted. Thank you for reaching out." });
      reset();
    } catch (error) {
      // Preserve the draft on failure; a timeout can mean delivery status is unknown.
      setNotice({ error: true, text: error instanceof Error && error.name === "Error"
        ? error.message : "Message could not be confirmed. Your draft is preserved. Try again or use the email link." });
    } finally {
      pending.current = false;
      setToken("");
      if (widget.current) window.turnstile?.reset(widget.current);
    }
  };
  return (
    <div className="section-shell contact-section">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>
      <div className="contact-layout">
        <div>
          <h3>Let’s talk.</h3>
          <p>
            <a href="mailto:david.magbee@me.com">david.magbee@me.com</a>
          </p>
          <p>
            <a href="tel:+15743292425">+1 (574) 329-2425</a>
          </p>
          {/* Keep the supplied scheduling URL intact; its redirect was verified. */}
          <p>
            <a className="project-link" href="https://bit.ly/davidmagbee">
              Schedule a meeting ↗
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting} aria-describedby="contact-note">
          {/* Honeypot stays out of keyboard navigation and the accessibility tree. */}
          <div hidden aria-hidden="true">
            <label>Website<input {...register("website")} defaultValue="" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="form-row">
            <label>
              Name
              <input
                {...register("name")}
                autoComplete="name"
                maxLength={100}
                readOnly={isSubmitting}
                required
                className="contactInput"
              />
            </label>
            <label>
              Email
              <input
                {...register("email")}
                autoComplete="email"
                maxLength={254}
                readOnly={isSubmitting}
                type="email"
                required
                className="contactInput"
              />
            </label>
          </div>
          <label>
            Subject
            <input {...register("subject")} required maxLength={200} readOnly={isSubmitting} className="contactInput" />
          </label>
          <label>
            Message
            <textarea
              {...register("message")}
              required
              rows={6}
              maxLength={5000}
              readOnly={isSubmitting}
              className="contactInput"
            />
          </label>
          <p id="contact-note" className="muted form-note">
            Send a message directly, or use the email or scheduling links.
          </p>
          {siteKey ? <>
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              onReady={() => setReady(true)}
              onError={() => setNotice({ error: true, text: "Spam verification could not load. Reload or use the email link." })} />
            <div ref={container} />
          </> : <p className="form-note">The form is temporarily unavailable. Please use the email or scheduling link.</p>}
          <noscript>Please use the email or scheduling link; this form requires JavaScript for spam verification.</noscript>
          {/* Persistent live regions announce asynchronous outcomes without moving focus. */}
          <p role="status" aria-live="polite" className="form-note">{!notice.error ? notice.text : ""}</p>
          <p role="alert" className="form-note form-error">{notice.error ? notice.text : ""}</p>
          <button className="send-button" type="submit" disabled={isSubmitting || !siteKey || !token}>
            {isSubmitting ? "Sending…" : "Send message ↗"}
          </button>
        </form>
      </div>
    </div>
  );
}
