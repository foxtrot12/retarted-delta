export const commonData = {
  headings: {
    work: "Work Experience",
    awards: "Awards",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    summary: "Summary"
  },
  summary: "I am a skilled Software Engineer with over three years of experience specializing in front-end development using Angular, ReactJS, JavaScript, TypeScript, and tools like RxJS, Canvas API, and WCAG for accessibility. I have led multiple projects, including launching the TC+ assessments platform (serving 300+ clients), the AI Screener (used by 500+ candidates monthly), and gamified tools like Process Monitoring and Avatar-based Assessments. My achievements include migrating legacy applications, ensuring AAA WCAG compliance across 11 products, developing reusable libraries like ATOM, and mentoring fellow developers. I hold a B.Tech in Computer Science from Amity School of Engineering (GPA 7.31) and received the Experienced Practitioner award in 2022. My internships at Marksman Technologies and Nethuts helped me refine my web development skills.",
  basics: {
    name: ["Chinmaya", "Sharma"],
    email: "chinmayasharma@aol.com",
    website: "https://chini.vercel.app/",
    phone: "+91 9873526069",
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
      "website": "https://www.prudentbrokers.com/",
      "endDate": "Present",
      "highlights": [
        "Lead <b>AAA WCAG</b> compliance for Compass platform",
        "Developed and own AI based priority issue triage system for Compass platform. Reduced manual triage time by <b>60%</b>",
        "Lead UI development of AI adviser for Compass platform, increasing user adoption by <b>20%</b>"
      ],
      "company": "Prudent Insurance Brokers Ltd",
      "position": "Software Engineer 2",
      "location": "Gurgaon",
      "startDate": "October 2025"
    },
    {
      "website": "https://www.shl.com/en-in/",
      "endDate": " September 2025",
      "highlights": [
        "Led the development of <b>SHL's AI Screener (SIA)</b>, currently the product sits at <b>8000+ MAU</b>.",
        "Achieved <b>AAA WCAG compliance</b> across <b>11</b> SHL products, significantly improving usability for diverse user groups.",
        "Led the initiative to remove vulnerabilities from <b>12</b> legacy products, enabling successful client-side security scans.",
        "Developed <b>6 new assessments</b> for TC+ platform and streamlined the CI/CD pipeline, reducing build and deployment times by <b>40%</b>, shaving <b>5 minutes</b> off every code check-in.",
        "Deployed a self-hosted <b>LibreSpeed</b> instance on internal servers, eliminating third-party API costs and reducing <b>mid-assessment drop-off rates by 30%</b> through precise candidate-to-server latency gating."
      ],
      "company": "SHL India",
      "position": "Software Engineer",
      "location": "Gurgaon",
      "startDate": "March 2024"
    },
    {
      "highlights": [
        "Developed proctoring services for <b>TC+</b> assessments platform, increasing user adoption to <b>300+</b> enterprise clients",
        "Led development of <b>Process Monitoring</b>, currently used across 3 industry sectors and seeing over <b>10000</b> MAU",
        "Migrated <b>8</b> applications from AngularJS to Angular and React, decreasing initial load time by <b>80%</b>,  build size by <b>30%</b>",
        "Created ATOM, a reusable form management library adopted across <b>5</b> teams, reducing form development time significantly."
      ],
      "company": "SHL India",
      "position": "Associate Software Engineer",
      "location": "Gurgaon",
      "startDate": "January 2022",
      "endDate": "March 2024",
      "website": "https://www.shl.com/en-in/",
    },
  ],
  awards: [
    {
      date: "October 2022",
      awarder: "SHL India",
      summary:
        "Recognized for my work in developing Next Generation assessments (Avatar based assessment and Process Monitoring)",
      title: "Experienced Practitioner",
    },
  ],
  sections: ["work", "skills", "projects", "awards", "education"],
  "skills": [
    {
      "level": "",
      "keywords": [
        "JavaScript",
        "Typescript",
        "SQL",
        "CQL"
      ],
      "name": "Languages"
    },
    {
      "keywords": [
        "Angular",
        "ReactJS",
        "Single-SPA",
        "Docker",
        "NodeJS",
        "Cloudflare",
        "ExpressJS",
        "NestJS",
        "NextJS"
      ],
      "name": "Frameworks and Libraries"
    },
    {
      "keywords": [
        "HTML/CSS",
        "SCSS",
        "Reactive forms",
        "Linux",
        "RxJS",
        "Canvas API",
        "WCAG",
        "Git",
        "Bitbucket",
        "Hooks API",
        "Mobile First Design",
        "Responsive UI",
        "Jira",
        "Functional Programming"
      ],
      "name": "Tools and Utilities"
    },
    {
      "keywords": [
        "Antigravity IDE", "Antigravity CLI", "Github Copilot", "Claude Skills", "MCPs", "Agentic Workflows", "AI Agents & Sub-Agents", "AI Harness Development", "Token/Context Optimization"
      ],
      "name": "AI"
    }
  ],
  "projects": [
    {
      "keywords": [
        "Ubuntu",
        "Docker",
        "Cloudflare",
        "Nextcloud",
        "SSH",
        "Self-Hosting"
      ],
      "name": "Byte-me",
      "url": "https://byte-me.chinmaya.lol",
      "description": "Architected and self-hosted a secure home server setup running <b>Nextcloud </b> storage, a media streaming platform, and an <b>SSH</b> remote access server on <b>Ubuntu</b>. Implemented automated daily system health reporting, zero-trust internet exposure via <b>Cloudflare Tunnels</b>, and <b>Docker</b> container orchestration."
    },
    {
      "keywords": [
        "Typescript",
        "RxJS"
      ],
      "name": "RagaReactive",
      "url": "https://www.npmjs.com/package/raga-reactive",
      "description": "Developed <b>RagaReactive</b>, a lightweight, <b>RxJS</b>-based state management utility for reactive applications. Simplifies state handling and subscriptions with a <b>TypeScript</b>-first API. Publicly available on <b>NPM</b>. This has been adopted by <b>SHL</b> and used in <b>3</b> projects for framework agnostic <b>state management</b>."
    },
  ]
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
  summary: string
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
  summary: string;
}
