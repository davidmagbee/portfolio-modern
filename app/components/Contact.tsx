import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = { name: string; email: string; subject: string; message: string };
export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (values) => {
    // Encode complete fields so ampersands, Unicode, and line breaks survive mailto.
    const body = `Hi, my name is ${values.name}.\n\n${values.message}\n\n${values.email}`;
    window.location.href = `mailto:david.magbee@me.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <label>
              Name
              <input
                {...register("name")}
                autoComplete="name"
                required
                className="contactInput"
              />
            </label>
            <label>
              Email
              <input
                {...register("email")}
                autoComplete="email"
                type="email"
                required
                className="contactInput"
              />
            </label>
          </div>
          <label>
            Subject
            <input {...register("subject")} required className="contactInput" />
          </label>
          <label>
            Message
            <textarea
              {...register("message")}
              required
              rows={6}
              className="contactInput"
            />
          </label>
          <p className="muted form-note">
            Opens your email app with a draft. You send it from there.
          </p>
          <button className="send-button" type="submit">
            Open email draft ↗
          </button>
        </form>
      </div>
    </div>
  );
}
