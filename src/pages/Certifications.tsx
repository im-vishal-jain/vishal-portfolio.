
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import "../styles/Certifications.css";

const certifications = [
  {
    id: "01",
    category: "DATA ANALYTICS",
    title: "Data Analysis with Python",
    organization: "IBM SkillsBuild",
    issueDate: "November 2025",
    credentialId: "Add Credential ID",
    description:
      "Professional learning certification focused on data analysis using Python.",
    skills: ["Python", "Data Analysis", "Pandas", "Data Visualization"],
    status: "Completed",
    side: "left",
    credentialUrl: "",
  },
];

export default function Certifications() {
  return (
    <main className="certifications-page">
      <div className="certifications-background">
        <div className="certifications-glow" />
        <div className="certifications-grid" />
      </div>

      <div className="certifications-container">

        {/* PAGE HEADER */}
        <header className="certifications-header">
          <span className="certifications-eyebrow">
            <span className="certifications-dot" />
            MY ACHIEVEMENTS
          </span>

          <h1>
            Certifications <span>& Credentials</span>
          </h1>

          <p>
            Professional certifications and continuous learning that
            strengthen my technical knowledge and expertise.
          </p>
        </header>

        {/* SECTION HEADING */}
        <div className="certification-section-heading">
          <div>
            <span>LEARNING JOURNEY</span>
            <h2>My Certifications</h2>
          </div>

          <span className="certification-total">
            {certifications.length.toString().padStart(2, "0")} CREDENTIAL
          </span>
        </div>

        {/* CERTIFICATION TIMELINE */}
        <section className="certification-timeline">
          <div className="certification-timeline-line" />

          {certifications.map((cert) => (
            <div
              className={`certification-timeline-row ${cert.side}`}
              key={cert.id}
            >
              <article className="certification-card">

                {/* CARD TOP */}
                <div className="certification-card-top">
                  <span className="certification-number">
                    {cert.id}
                  </span>

                  <span className="certification-status">
                    <BadgeCheck size={12} />
                    {cert.status}
                  </span>
                </div>

                {/* CERTIFICATE ICON */}
                <div className="certification-icon">
                  <Award size={25} strokeWidth={1.8} />
                </div>

                {/* CERTIFICATE DETAILS */}
                <span className="certification-category">
                  {cert.category}
                </span>

                <h3>{cert.title}</h3>

                <p className="certification-organization">
                  {cert.organization}
                </p>

                {/* META INFORMATION */}
                <div className="certification-meta">
                  <div>
                    <CalendarDays size={14} />
                    <span>{cert.issueDate}</span>
                  </div>

                  <div>
                    <ShieldCheck size={14} />
                    <span>{cert.credentialId}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="certification-description">
                  {cert.description}
                </p>

                {/* SKILLS */}
                <div className="certification-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {/* CARD FOOTER */}
                <div className="certification-card-bottom">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="certification-link"
                    >
                      View Credential
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="certification-no-link">
                      Credential link not added
                    </span>
                  )}

                  <span className="certification-watermark">
                    {cert.id}
                  </span>
                </div>

              </article>

              {/* TIMELINE MARKER */}
              <div className="certification-timeline-marker">
                <Award size={21} />
              </div>

              <div className="certification-timeline-empty" />
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="certifications-footer">
          <span>© {new Date().getFullYear()} Vishal Kumar</span>
          <span>Designed & Built with passion.</span>
        </footer>

      </div>
    </main>
  );
}
