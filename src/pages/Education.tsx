
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  CalendarDays,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";

import "../styles/Education.css";

const educationData = [
  {
    id: "01",
    level: "Graduation",
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    institution: "Gurukul Kangri Vishwavidyalaya, Haridwar, Uttarakhand",
    location: "Haridwar, Uttarakhand",
    duration: "Aug 2023 – Aug 2027",
    status: "Currently Pursuing",
    result: "In Progress",
    icon: GraduationCap,
    highlights: ["Electronics", "Communication", "Technology"],
  },
  {
    id: "02",
    level: "Intermediate",
    degree: "Intermediate of Science",
    field: "Physics, Chemistry & Mathematics",
    institution: "DR.KK Mandal College, Ara, Bihar",
    location: "Ara, Bihar",
    duration: "2020",
    status: "Completed",
    icon: BookOpen,
    highlights: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    id: "03",
    level: "Matriculation",
    degree: "Secondary Education",
    field: "Class 10",
    institution: "SS High School, Ara, Bihar",
    location: "Ara, Bihar",
    duration: "2020",
    status: "Completed",
    icon: School,
    highlights: ["Mathematics", "Science", "English"],
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* Section Heading */}
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="education-eyebrow">
            <Sparkles size={15} />
            MY ACADEMIC JOURNEY
          </span>

          <h2>
            Education <span>& Background</span>
          </h2>

          <p>
            My academic journey, learning experiences, and educational
            foundation that shaped my technical career.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((education, index) => {
            const Icon = education.icon;

            return (
              <motion.article
                className={`education-item ${
                  index % 2 === 0 ? "education-left" : "education-right"
                }`}
                key={education.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                {/* Timeline Marker */}
                <div className="education-timeline-marker">
                  <div className="education-timeline-dot">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Education Card */}
                <div className="education-card">
                  <div className="education-card-top">
                    <span className="education-number">
                      {education.id}
                    </span>

                    <span
                      className={`education-status ${
                        education.status === "Currently Pursuing"
                          ? "status-current"
                          : "status-completed"
                      }`}
                    >
                      {education.status}
                    </span>
                  </div>

                  <div className="education-icon">
                    <Icon size={34} strokeWidth={1.6} />
                  </div>

                  <div className="education-card-content">
                    <span className="education-level">
                      {education.level}
                    </span>

                    <h3>{education.degree}</h3>

                    <p className="education-field">
                      {education.field}
                    </p>

                    <div className="education-institution">
                      <GraduationCap size={15} />
                      <span>{education.institution}</span>
                    </div>

                    <div className="education-meta">
                      <span>
                        <CalendarDays size={14} />
                        {education.duration}
                      </span>

                      <span>
                        <MapPin size={14} />
                        {education.location}
                      </span>
                    </div>

                    <div className="education-highlights">
                      {education.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="education-result">
                    <Award size={16} />
                    <span>{education.result}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
