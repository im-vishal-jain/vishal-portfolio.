
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/personal";
import "../styles/global.css";

export default function Home() {
  return (
    <main className="v-home">

      {/* AMBIENT BACKGROUND */}
      <div className="v-background" aria-hidden="true">
        <div className="v-glow v-glow-purple" />
        <div className="v-glow v-glow-pink" />
      </div>

      {/* HERO */}
      <section className="v-hero">
        <motion.div
          className="v-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >

          {/* INTRODUCTION */}
          <p className="v-eyebrow">
            <span className="v-status-dot" />
            {personalInfo.availability}
          </p>

          <h1 className="v-heading">
            <span className="v-heading-gradient">
              Hi, I'm Vishal
            </span>
          </h1>

          <h2 className="v-profession">
            AI Engineer &amp; Data Scientist
          </h2>

          <p className="v-description">
            Welcome to my portfolio. I build intelligent
            applications, develop machine learning solutions,
            and transform complex data into meaningful insights.
            Let's create something impactful together.
          </p>

          {/* CTA BUTTONS */}
          <div className="v-hero-buttons">
            <Link to="/projects" className="v-primary-btn">
              View My Projects
              <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className="v-secondary-btn">
              Get In Touch
            </Link>
          </div>

          {/* SCROLL INDICATOR */}
          <a href="#featured-work" className="v-scroll-link">
            <span>Scroll to explore</span>
            <ArrowDown size={14} />
          </a>
        </motion.div>

        {/* BOTTOM FOOTER */}
        <footer className="v-footer">
          <span>
            © {new Date().getFullYear()} Vishal Kumar
          </span>

          <span>
            AI Engineer · Data Analyst · Data Scientist
          </span>
        </footer>
      </section>

      {/* FEATURED WORK */}
      <section
        id="featured-work"
        className="v-featured-anchor"
      >
        <div>
          <span>01 / SELECTED WORK</span>

          <h2>Building Ideas Into Reality.</h2>

          <p>
            Explore my projects, technical skills and experience.
          </p>

          <Link to="/projects">
            Explore Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
