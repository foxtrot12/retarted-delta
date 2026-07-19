import React, { CSSProperties, memo, useMemo } from "react";
import "./resume.scss";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt, FaLink } from "react-icons/fa";
import { ResumeData } from "./const/common";

const Resume: React.FC<{
  resumeData: ResumeData;
  pColor: string | null;
  sColor: string | null;
  tColor: string | null;
  bgColor: string | null;
  fontClass: string | null;
  italicFontClass: string | null;
}> = ({
  resumeData,
  pColor,
  sColor,
  tColor,
  bgColor,
  fontClass,
  italicFontClass,
}) => {
    const style = useMemo(() => {
      const style: CSSProperties & Record<string, string | undefined> = {};

      pColor ? (style["--primaryColor"] = pColor) : null;
      sColor ? (style["--secondaryColor"] = sColor) : null;
      tColor ? (style["--tertiaryColor"] = tColor) : null;
      bgColor ? (style["--bgColor"] = bgColor) : null;

      return style;
    }, [pColor, sColor, tColor, bgColor]);

    return (
      <div
        style={style}
        className={`resume-container ${fontClass ?? "latex-serif"}`}
      >
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">
            <span>{resumeData.basics.name[0]}</span>
            <span className="lastName">{resumeData.basics.name[1]}</span>
          </h1>
          <div className="resume-contact">
            {resumeData.basics.email && (
              <a href={`mailto:${resumeData.basics.email}`}>
                <MdEmail /> {resumeData.basics.email}
              </a>
            )}
            {resumeData.basics.phone && (
              <span>
                <FaMobileAlt /> {resumeData.basics.phone}
              </span>
            )}
            {resumeData.basics.website && (
              <a
                href={resumeData.basics.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink /> {resumeData.basics.website}
              </a>
            )}
          </div>
        </header>

        {/* Summary */}
        {resumeData.summary && (
          <section className="resume-section" id="summary">
            <h2 className="section-title">
              {resumeData.headings.summary || "Summary"}
            </h2>
            <p className="summary-text">
              {resumeData.summary}
            </p>
          </section>
        )}

        {/* Work Experience */}
        {resumeData.work && resumeData.work.length > 0 && (
          <section className="resume-section" id="work">
            <h2 className="section-title">
              {resumeData.headings.work || "Work Experience"}
            </h2>
            {resumeData.work.map((job, index) => (
              <div key={index} className="work-item">
                <div className="item-header">
                  <span className="item-title">
                    <strong>{job.position}</strong> | <a href={job.website} target="_blank" rel="noopener noreferrer" className="company-name">{job.company}</a>
                    {job.location && (
                      <span className="location-name">, {job.location}</span>
                    )}
                  </span>
                  <span className="job-date">
                    {job.startDate} – {job.endDate}
                  </span>
                </div>
                <div className="job-details">
                  {job.highlights &&
                    job.highlights.filter((h) => h.trim() !== "").length > 0 && (
                      <ul>
                        {job.highlights
                          .filter((h) => h.trim() !== "")
                          .map((hl, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: hl }} />
                          ))}
                      </ul>
                    )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <section className="resume-section" id="skills">
            <h2 className="section-title">
              {resumeData.headings.skills || "Skills"}
            </h2>
            <div className="skills-list">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  {skill.name && <strong>{skill.name}: </strong>}
                  <span>{skill.keywords.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <section className="resume-section" id="projects">
            <h2 className="section-title">
              {resumeData.headings.projects || "Projects"}
            </h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="item-header">
                  <span className="item-title">
                    <strong>{project.name}</strong>
                    {project.keywords && project.keywords.length > 0 && (
                      <span className="project-keywords">
                        {" | "}
                        <span className={italicFontClass ?? "latex-serif-italic"}>
                          {project.keywords.join(", ")}
                        </span>
                      </span>
                    )}
                  </span>
                  {project.url && (
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> View Project
                    </a>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {resumeData.awards && resumeData.awards.length > 0 && (
          <section className="resume-section" id="awards">
            <h2 className="section-title">
              {resumeData.headings.awards || "Awards"}
            </h2>
            {resumeData.awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="item-header">
                  <span className="award-title">
                    <strong>{award.title}</strong>
                    {award.awarder && ` – ${award.awarder}`}
                  </span>
                  <span className="award-date">{award.date}</span>
                </div>
                {award.summary && (
                  <div className="award-details">
                    <p>{award.summary}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <section className="resume-section" id="education">
            <h2 className="section-title">
              {resumeData.headings.education || "Education"}
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="item-header">
                  <span className="education-title">
                    <strong>{edu.institution}</strong>
                    {edu.location && `, ${edu.location}`}
                  </span>
                  <span className="education-date">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="item-subheader">
                  <span className="education-degree">
                    {edu.studyType} in {edu.area}
                  </span>
                  {edu.gpa && (
                    <span className="education-gpa">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };

export default memo(Resume);
