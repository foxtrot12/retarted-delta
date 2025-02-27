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
