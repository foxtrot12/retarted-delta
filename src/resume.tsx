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
  }, []);

  return (
    <div
      style={style}
      className={`resume-container ${fontClass ?? "roboto-mono"}`}
    >
      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">
          <p>{resumeData.basics.name[0]}</p>
          <p className="textHollow">{resumeData.basics.name[1]}</p>
        </h1>
        <div className="resume-contact">
          <a href={`mailto:${resumeData.basics.email}`}>
            <MdEmail /> {resumeData.basics.email}
          </a>{" "}
          | <FaMobileAlt /> {resumeData.basics.phone} |{" "}
          <a
            href={resumeData.basics.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink /> {resumeData.basics.website}
          </a>
        </div>
      </header>

      {/* Work Experience */}
      <section className="resume-section" id="work">
        <h2 className="section-title">
          {resumeData.headings.work || "Work Experience"}
        </h2>
        {resumeData.work.map((job, index) => (
          <div key={index} className="work-item">
            <div className="item-header">
              <h3 className="job-title">
                {job.position} at {job.company},{" "}
                <p className={`${italicFontClass ?? "roboto-mono-italic"} wt200`}>
                  {job.location}
                </p>
              </h3>
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
                        <li key={idx}>{hl}</li>
                      ))}
                  </ul>
                )}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
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

      {/* Projects */}
      <section className="resume-section" id="projects">
        <h2 className="section-title">
          {resumeData.headings.projects || "Projects"}
        </h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="project-item">
            <span className="project-title-line">
              <h3> {project.name} </h3>
              <span className="rtSide">
                <span
                  className={`${
                    italicFontClass ?? "roboto-mono-italic"
                  } skills wt200`}
                >
                  {project.keywords.map((kWord, ind) => (
                    <p key={ind}>{kWord}</p>
                  ))}
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
              </span>
            </span>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Awards */}
      <section className="resume-section" id="awards">
        <h2 className="section-title">
          {resumeData.headings.awards || "Awards"}
        </h2>
        {resumeData.awards.map((award, index) => (
          <div key={index} className="award-item">
            <div className="item-header">
              <h3 className="award-title">{award.title}</h3>
              <span className="award-date">{award.date}</span>
            </div>
            <div className="award-details">
              {award.awarder && <p>Awarded by: {award.awarder}</p>}
              {award.summary && <p>{award.summary}</p>}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="resume-section" id="education">
        <h2 className="section-title">
          {resumeData.headings.education || "Education"}
        </h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="item-header">
              <h3 className="education-institution">{edu.institution}</h3>
              <span className="education-date">
                {edu.startDate} – {edu.endDate}
              </span>
            </div>
            <div className="education-details">
              {edu.studyType && edu.area && (
                <p>
                  {edu.studyType} in {edu.area}
                </p>
              )}
              {edu.location && <p>Location: {edu.location}</p>}
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default memo(Resume);
