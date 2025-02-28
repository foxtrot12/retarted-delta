export const commonData = {
  headings: {
    work: "Work Experience",
    awards: "Awards",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
  },
  basics: {
    name: ["Chinmaya", "Sharma"],
    email: "s.chinmaya@myyahoo.com",
    website: "https://chini.vercel.app/",
    phone: "+91 8076969130",
  },
  education: [
    {
      area: "Computer Science",
      studyType: "B.Tech",
      endDate: "April 2022",
      gpa: "7.31",
      institution: " Amity School of Engineering and Technology",
      location: "Noida, Uttar Pradesh",
      startDate: "July 2018",
    },
  ],
    "work": [
    {
      "website": "",
      "endDate": "Present",
      "highlights": [
        "Worked on development of  SIA, SHL's AI  Screener",
        "Assumed increased leadership responsibilities as a Software Engineer.",
        "Developed new features for implementation of WCAG patterns across products",
        "Led a project to systematically eliminate legacy vulnerabilities from the codebase, ensuring enhanced security and stability.",
        "Working on development of new assessments for TC+ platform and simplification of CI/CD pipeline"
      ],
      "company": " SHL India",
      "position": "Software Engineer",
      "location": "Gurgaon",
      "startDate": "March 2024"
    },
    {
      "highlights": [
        "Played a pivotal role in launching TC Plus, a new assessments platform.",
        "Developed innovative, media based assessments to enhance user engagement.",
        "Worked on development of  Process Monitoring -  a simulation based assessment",
        "Led significant migration projects, transitioning from AngularJS to Angular and React.",
        "Focused on improving software accessibility in alignment with WCAG guidelines.",
        "Worked on developing ATOM, a form management library reducing development time across teams"
      ],
      "company": " SHL India",
      "position": "Associate Software Engineer",
      "location": "Gurgaon",
      "startDate": "January 2022",
      "endDate": "March 2024"
    },
    {
      "highlights": [
        ""
      ],
      "company": "Marksman Technologies",
      "position": "Web Development Intern",
      "location": "Noida",
      "startDate": "May 2021",
      "endDate": "July 2021"
    },
    {
      "highlights": [
        ""
      ],
      "company": "Nethuts",
      "position": "Web Development Intern",
      "location": "Kolkata",
      "startDate": "September 2020",
      "endDate": "December 2020"
    }
  ],
  awards: [
    {
      date: "October 2022",
      awarder: "SHL India",
      summary:
        "Recognised for my work in developing Next Generation assessments (Avatar based assesment and Process Monitoring)",
      title: "Experienced Practitioner",
    },
  ],
  sections: ["work", "skills", "projects", "awards", "education"],
};

export interface EducationEntry {
  area: string;
  studyType: string;
  endDate: string;
  gpa: string;
  institution: string;
  location: string;
  startDate: string;
}

export interface WorkEntry {
  website?: string;
  endDate: string;
  highlights: string[];
  company: string;
  position: string;
  location: string;
  startDate: string;
}

export interface SkillEntry {
  level?: string;
  keywords: string[];
  name?: string;
}

export interface ProjectEntry {
  keywords: string[];
  name: string;
  description: string;
  url?: string;
}

export interface AwardEntry {
  date: string;
  awarder: string;
  summary: string;
  title: string;
}

export interface ResumeHeadings {
  work: string;
  awards: string;
  education: string;
  skills: string;
  projects: string;
}

export interface Basics {
  name: string[];
  email: string;
  website: string;
  phone: string
}

export interface ResumeData {
  headings: ResumeHeadings;
  basics: Basics;
  education: EducationEntry[];
  work: WorkEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  awards: AwardEntry[];
  sections: string[];
}
