
import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import "../styles/Contact.css";

const EMAIL = "your-email@example.com";

// GitHub custom SVG icon
function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

// LinkedIn custom SVG icon
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.95V9h2.98v9.5ZM6.44 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19.05 18.5h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.19-1.76 2.43v4.7H9.82V9h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.57v5.17h-.06Z" />
    </svg>
  );
}

const contactItems = [
  {
    number: "01",
    side: "left",
    category: "EMAIL",
    title: "Let's Talk",
    description: "Have a question or want to discuss a project?",
    value: EMAIL,
    action: "Send Email",
    icon: Mail,
    href: `mailto:${EMAIL}`,
    status: "Available",
  },
  {
    number: "02",
    side: "right",
    category: "LOCATION",
    title: "Based in India",
    description: "Currently based in Haridwar, Uttarakhand.",
    value: "Haridwar, Uttarakhand",
    action: "View Location",
    icon: MapPin,
    href: "https://maps.google.com/?q=Haridwar,Uttarakhand",
    status: "India",
  },
  {
    number: "03",
    side: "left",
    category: "GITHUB",
    title: "Explore My Work",
    description: "Explore my projects, repositories and technical work.",
    value: "GitHub Profile",
    action: "Visit GitHub",
    icon: GitHubIcon,
    href: "https://github.com/your-username",
    status: "Open Profile",
  },
  {
    number: "04",
    side: "right",
    category: "LINKEDIN",
    title: "Let's Connect",
    description: "Connect with me for professional networking and opportunities.",
    value: "LinkedIn Profile",
    action: "Visit LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/your-profile/",
    status: "Open Profile",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSubmitted(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="contact-bg">
        <div className="contact-bg-glow" />
        <div className="contact-bg-grid" />
      </div>

      <div className="contact-container">

        {/* PAGE HEADER */}
        <header className="contact-header">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            GET IN TOUCH
          </span>

          <h1>
            Contact <span>& Connect</span>
          </h1>

          <p>
            Let's connect, collaborate and create something meaningful
            together.
          </p>
        </header>

        {/* CONTACT TIMELINE */}
        <section className="contact-timeline">
          <div className="contact-timeline-line" />

          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className={`contact-timeline-row ${item.side}`}
                key={item.number}
              >
                <article className="contact-timeline-card">

                  <div className="contact-card-top">
                    <span className="contact-card-number">
                      {item.number}
                    </span>

                    <span className="contact-card-status">
                      {item.status}
                    </span>
                  </div>

                  <div className="contact-card-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="contact-card-category">
                    {item.category}
                  </span>

                  <h2>{item.title}</h2>

                  <p className="contact-card-description">
                    {item.description}
                  </p>

                  <div className="contact-card-value">
                    {item.value}
                  </div>

                  <div className="contact-card-bottom">
                    {item.number === "01" ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="contact-card-action"
                      >
                        {copied ? (
                          <CheckCircle2 size={15} />
                        ) : (
                          <Copy size={15} />
                        )}

                        {copied ? "Copied!" : "Copy Email"}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card-action"
                      >
                        {item.action}
                        <span>↗</span>
                      </a>
                    )}

                    <span className="contact-card-decoration">
                      {item.number}
                    </span>
                  </div>

                </article>

                <div className="contact-timeline-marker">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="contact-timeline-empty" />
              </div>
            );
          })}
        </section>

        {/* CONTACT FORM */}
        <section className="contact-form-section">

          <div className="contact-form-heading">
            <span className="contact-card-category">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Send Me a <span>Message</span>
            </h2>

            <p>
              Have an idea, collaboration or opportunity? Feel free to
              drop me a message.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <Send size={17} />
            </button>

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={17} />
                Your email application is opening. Send your message from there.
              </div>
            )}

          </form>
        </section>

        {/* AVAILABILITY */}
        <section className="contact-availability">

          <div className="contact-availability-icon">
            <BriefcaseBusiness size={24} />
          </div>

          <div>
            <span className="contact-availability-label">
              <span />
              OPEN TO OPPORTUNITIES
            </span>

            <h3>Let's build something great together.</h3>

            <p>
              Open to internships, collaborations and exciting projects.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="contact-footer">
          <span>© {new Date().getFullYear()} Vishal Kumar</span>
          <span>Designed & Built with passion.</span>
        </footer>

      </div>
    </main>
  );
}
