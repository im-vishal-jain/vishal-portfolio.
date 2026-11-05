
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  BrainCircuit,
  Code2,
  Cpu,
  Sparkles,
  Workflow,
  TrendingUp,
} from "lucide-react";

import "../styles/Skills.css";

const skillCategories = [
  {
    id: "01",
    title: "Programming",
    subtitle: "Languages & Development",
    description:
      "Building applications and solving problems through programming.",
    icon: Code2,
    skills: ["Python", "C++", "C", "SQL", "JavaScript"],
  },
  {
    id: "02",
    title: "Machine Learning",
    subtitle: "Intelligent Algorithms",
    description:
      "Developing predictive models and intelligent data-driven solutions.",
    icon: BrainCircuit,
    skills: ["Supervised ML", "Unsupervised ML", "Model Evaluation"],
  },
  {
    id: "03",
    title: "Generative AI",
    subtitle: "Generative AI Technologies",
    description:
      "Creating AI-powered applications using modern generative technologies.",
    icon: Sparkles,
    skills: ["Prompt Engineering", "RAG", "LangChain"],
  },
  {
    id: "04",
    title: "LLMs",
    subtitle: "Large Language Models",
    description:
      "Working with large language models and intelligent AI applications.",
    icon: Cpu,
    skills: ["OpenAI", "Gemini", "Claude"],
  },
  {
    id: "05",
    title: "Agentic AI",
    subtitle: "Autonomous AI Systems",
    description:
      "Building autonomous workflows and multi-agent AI systems.",
    icon: Workflow,
    skills: ["LangGraph", "Tool Calling", "Multi-Agent"],
  },
  {
    id: "06",
    title: "Data Analytics",
    subtitle: "Data & Business Intelligence",
    description:
      "Transforming raw data into meaningful insights and visualizations.",
    icon: TrendingUp,
    skills: ["SQL", "Power BI", "Excel", "Statistics"],
  },
];

function Skills() {
  return (
    <main className="skills-page">
      {/* BACKGROUND */}
      <div className="skills-background">
        <div className="skills-background-glow skills-glow-one" />
        <div className="skills-background-glow skills-glow-two" />
      </div>

      {/* BRAND */}
      <header className="skills-topbar">
        <Link to="/" className="skills-brand-mark">
          VK<span>.</span>
        </Link>
      </header>

      <section className="skills-showcase">
        {/* HEADING */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">
            <Sparkles size={15} />
            MY TECHNICAL EXPERTISE
          </span>

          <h1>
            Skills <span>& Technologies</span>
          </h1>

          <p>
            Exploring technologies and building intelligent solutions
            through programming, AI engineering, and data analytics.
          </p>
        </motion.div>

        {/* SKILLS TIMELINE */}
        <div className="skills-timeline">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                className={`skills-item ${
                  index % 2 === 0 ? "skills-left" : "skills-right"
                }`}
                key={category.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                }}
              >
                {/* CENTER TIMELINE ICON */}
                <div className="skills-timeline-marker">
                  <div className="skills-timeline-dot">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* SKILL CARD */}
                <div className="skills-card">
                  <div className="skills-card-art" />

                  <div className="skills-card-top">
                    <span className="skills-number">
                      {category.id}
                    </span>

                    <span className="skills-card-label">
                      EXPERTISE
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="skills-card-icon">
                    <Icon size={34} strokeWidth={1.7} />
                  </div>

                  {/* CONTENT */}
                  <div className="skills-card-content">
                    <span className="skills-card-subtitle">
                      {category.subtitle}
                    </span>

                    <h2>{category.title}</h2>

                    <p>{category.description}</p>
                  </div>

                  {/* SKILLS */}
                  <div className="skills-tags">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="skills-card-footer">
                    <span>Technical Skills</span>
                    <Sparkles size={16} />
                  </div>
                </div>

                {/* EMPTY TIMELINE COLUMN */}
                <div className="skills-empty-column" />
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Skills;
