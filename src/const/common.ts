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
      "Contributed to the development of SHL's AI Screener (SIA), currently in limited release and used by ~500 candidates monthly.",
      "Assumed increased leadership responsibilities as a Software Engineer, mentoring 4 developers and driving improvements across multiple projects.",
      "Achieved AAA WCAG compliance across 11 SHL products by implementing accessibility patterns, significantly improving usability for diverse user groups.",
      "Led the initiative to remove vulnerabilities from 12 legacy products, enabling successful client-side security scans that had previously failed.",
      "Developed 6 new assessments for the TC+ platform and streamlined the CI/CD pipeline to enhance build reliability and reduce deployment friction."
    ],
    "company": "SHL India",
    "position": "Software Engineer",
    "location": "Gurgaon",
    "startDate": "March 2024"
  },
  {
    "highlights": [
      "Played a pivotal role in launching TC Plus, a new assessments platform adopted by 300+ enterprise clients.",
      "Designed and developed media-rich assessments to improve candidate engagement and assessment quality.",
      "Led development of Process Monitoring, a simulation-based assessment now used across three industry sectors.",
      "Directed migration of 8 applications from AngularJS to Angular and React, improving performance and maintainability.",
      "Enhanced accessibility across platforms in alignment with WCAG guidelines.",
      "Created ATOM, a reusable form management library adopted across 5 teams, reducing form development time significantly."
    ],
    "company": "SHL India",
    "position": "Associate Software Engineer",
    "location": "Gurgaon",
    "startDate": "January 2022",
    "endDate": "March 2024"
  },
  {
    "highlights": [
      "Built responsive landing pages and dashboards using HTML, CSS, JavaScript, and Bootstrap, improving page load speed by 30%.",
      "Integrated REST APIs and assisted in debugging user-facing issues across 3 projects."
    ],
    "company": "Marksman Technologies",
    "position": "Web Development Intern",
    "location": "Noida",
    "startDate": "May 2021",
    "endDate": "July 2021"
  },
  {
    "highlights": [
      "Designed and developed 4 front-end components for client projects using HTML, CSS, and jQuery.",
      "Assisted in testing and deploying WordPress-based sites, accelerating project delivery by 20%."
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
