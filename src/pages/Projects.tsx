
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Sparkles,
  BriefcaseBusiness,
  GraduationCap,
  Workflow,
  Layers3,
  ExternalLink,
} from "lucide-react";

import "../styles/Projects.css";

const projectsData = [
  {
    id: "01",
    title: "Career Copilot AI",
    category: "Generative AI",
    subtitle: "AI-Powered Career Assistant",
    description:
      "An intelligent career assistant that helps users analyze resumes, explore job opportunities, and receive AI-powered career guidance.",
    icon: BriefcaseBusiness,
    technologies: ["Python", "Streamlit", "LangChain", "FAISS", "LLMs"],
    featured: true,
  },
  {
    id: "02",
    title: "LearnSphere AI",
    category: "AI & Education",
    subtitle: "Personalized Learning Platform",
    description:
      "An AI-powered learning platform designed to deliver personalized learning experiences, intelligent assistance, and learning recommendations.",
    icon: GraduationCap,
    technologies: ["Python", "Streamlit", "Generative AI", "LLMs"],
    featured: false,
  },
  {
    id: "03",
    title: "System Design Generator",
    category: "AI Engineering",
    subtitle: "Intelligent Architecture Designer",
    description:
      "An AI-powered system design platform that helps generate architecture diagrams, explore design decisions, and understand scalable systems.",
    icon: Workflow,
    technologies: ["Python", "LangGraph", "LLMs", "Mermaid"],
    featured: true,
  },
  {
    id: "04",
    title: "NexusOS",
    category: "Web Development",
    subtitle: "Intelligent SaaS Platform",
    description:
      "A modern SaaS platform with an interactive dashboard, system management, integrations, and visual graph exploration.",
    icon: Layers3,
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    featured: false,
  },
];

function Projects() {
  return (
    <main className="projects-page">

      {/* Background */}
      <div className="projects-background">
        <div className="projects-background-glow projects-background-glow-one" />
        <div className="projects-background-glow projects-background-glow-two" />
        <div className="projects-background-grid" />
      </div>

      {/* Logo */}
      <header className="projects-topbar">
        <Link to="/" className="projects-brand-mark">
          VK
        </Link>
      </header>

      {/* Projects Section */}
      <section className="projects-showcase">

        {/* Heading */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-eyebrow">
            <Sparkles size={15} />
            MY CREATIVE WORK
          </span>

          <h1>
            Projects <span>& Experiences</span>
          </h1>

          <p>
            A collection of projects where I transform ideas into
            practical applications using AI, technology, and software development.
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="projects-timeline">

          {projectsData.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`projects-item ${
                  index % 2 === 0 ? "projects-left" : "projects-right"
                }`}
                key={project.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >

                {/* Timeline Marker */}
                <div className="projects-timeline-marker">
                  <div className="projects-timeline-dot">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Project Card */}
                <div className="projects-card">

                  <div className="projects-card-top">
                    <span className="projects-number">
                      {project.id}
                    </span>

                    <div className="projects-card-badges">
                      {project.featured && (
                        <span className="projects-featured">
                          FEATURED
                        </span>
                      )}

                      <span className="projects-category">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="projects-card-icon">
                    <Icon size={38} strokeWidth={1.6} />
                  </div>

                  <div className="projects-card-content">
                    <span className="projects-subtitle">
                      {project.subtitle}
                    </span>

                    <h2>{project.title}</h2>

                    <p>{project.description}</p>
                  </div>

                  <div className="projects-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="projects-card-footer">
                    <span>Project Overview</span>
                    <ExternalLink size={16} />
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>
      </section>
    </main>
  );
}

export default Projects;
