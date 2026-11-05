import "../styles/About.css";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const specializations = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Exploring Generative AI, LLMs and intelligent applications that solve practical problems.",
    tags: ["Generative AI", "LLMs", "AI Applications"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Machine Learning",
    description:
      "Building predictive models and applying machine learning techniques to real-world datasets.",
    tags: ["Python", "Scikit-learn", "Deep Learning"],
  },
  {
    icon: Database,
    number: "03",
    title: "Data Analytics",
    description:
      "Turning complex datasets into actionable insights through analysis and visualization.",
    tags: ["SQL", "Power BI", "Data Visualization"],
  },
];

const principles = [
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Breaking complex problems into clear, practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Learning new technologies and improving through experimentation.",
  },
  {
    icon: Rocket,
    title: "Building & Creating",
    description:
      "Turning concepts into useful projects and working applications.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* BACKGROUND */}
      <div className="about-background" aria-hidden="true">
        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />
      </div>

      {/* PAGE INTRO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            GET TO KNOW ME
          </span>

          <h1>
            About <span>Me.</span>
          </h1>

          <p className="about-hero-description">
            The person behind the code, the ideas and the
            passion for building intelligent technology.
          </p>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-main">
        <div className="about-grid">

          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-section-label">
              <Sparkles size={14} />
              WHO I AM
            </span>

            <h2>
              I'm Vishal Kumar.
              <span>
                {" "}I turn curiosity into technology.
              </span>
            </h2>

            <p>
              I'm a Computer Science and Engineering student
              passionate about Artificial Intelligence, Machine
              Learning, Generative AI and Data Science.
            </p>

            <p>
              I enjoy understanding how technology works and
              using that knowledge to build practical solutions.
              From developing AI-powered applications to
              exploring machine learning models and analyzing
              data, I love working on ideas that challenge me.
            </p>

            <p>
              My goal is to continuously improve my technical
              skills, build meaningful products and grow as
              an AI and Data professional.
            </p>

            <div className="about-location">
              <MapPin size={17} />
              <span>Haridwar, Uttarakhand, India</span>
            </div>

            <div className="about-intro-actions">
              <Link to="/contact" className="about-contact-link">
                Let's Connect
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/projects" className="about-work-link">
                Explore My Work
              </Link>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            className="about-profile-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card-top">
              <span>PROFILE OVERVIEW</span>
              <span className="about-card-status">
                <i />
                Available
              </span>
            </div>

            <div className="about-avatar">
              VK
            </div>

            <h3>Vishal Kumar</h3>

            <p className="about-profile-role">
              AI Engineer | Data Analyst | Data Scientist
            </p>

            <p className="about-profile-tagline">
              Turning Data Into Intelligence.
            </p>

            <div className="about-card-divider" />

            <div className="about-profile-details">
              <div>
                <GraduationCap size={18} />
                <span>Computer Science & Engineering</span>
              </div>

              <div>
                <MapPin size={18} />
                <span>Haridwar, Uttarakhand, India</span>
              </div>

              <div>
                <BrainCircuit size={18} />
                <span>Artificial Intelligence & Data Science</span>
              </div>
            </div>

            <div className="about-card-footer">
              <span>
                <Sparkles size={14} />
                Innovation Through Technology
              </span>
              <span>VK.</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="about-specializations">

        <div className="about-section-heading">
          <span>MY EXPERTISE</span>

          <h2>
            What I <span>Focus On.</span>
          </h2>

          <p>
            The technologies and domains I enjoy learning,
            exploring and building with.
          </p>
        </div>

        <div className="about-specialization-grid">
          {specializations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                className="about-specialization-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="about-specialization-top">
                  <div className="about-specialization-icon">
                    <Icon size={23} />
                  </div>

                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="about-skill-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="about-card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* WORKING PRINCIPLES */}
      <section className="about-approach">

        <div className="about-section-heading">
          <span>MY MINDSET</span>

          <h2>
            How I Think <span>& Work.</span>
          </h2>

          <p>
            The principles that guide my learning and development.
          </p>
        </div>

        <div className="about-approach-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="about-approach-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="about-approach-icon">
                  <Icon size={22} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <CheckCircle2
                  className="about-principle-check"
                  size={17}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-education-preview">

        <div className="about-education-content">

          <div className="about-education-heading">
            <span className="about-section-label">
              <GraduationCap size={16} />
              MY EDUCATION
            </span>

            <h2>
              Building My Foundation
              <span> Through Learning.</span>
            </h2>

            <p>
              My academic journey in computer science,
              programming and emerging technologies.
            </p>

            <Link to="/education" className="about-education-link">
              View Full Education
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="about-education-card">

            <div className="about-education-timeline">
              <span className="about-timeline-dot" />
              <span className="about-timeline-line" />
            </div>

            <div className="about-education-details">
              <span className="about-education-year">
                AUG 2023 — AUG 2027
              </span>

              <h3>
                Bachelor of Technology
              </h3>

              <p className="about-degree">
                Computer Science & Engineering
              </p>

              <p className="about-college">
                BP Mandal College of Engineering,
                Madhepura, Bihar
              </p>

              <span className="about-education-status">
                Undergraduate Degree
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-bottom-cta">
        <span>LET'S CONNECT</span>

        <h2>
          Have an Idea?
          <span> Let's Build It.</span>
        </h2>

        <p>
          Interested in technology, collaboration or meaningful
          projects? I'd love to connect and exchange ideas.
        </p>

        <Link to="/contact" className="about-cta-button">
          Get In Touch
          <ArrowUpRight size={17} />
        </Link>
      </section>

    </main>
  );
}
