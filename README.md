# Resume Webpage Customization Guide

This project is a React-based resume page built with Vite, TypeScript, and Sass. It supports dynamic configuration of content and appearance through URL query parameters.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

---

## Query Parameters

You can customize the resume data and display settings by adding the following query parameters to the URL:

| Parameter | Type     | Description                                                                                                                              |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `phone`   | `string` | The phone number to be displayed. Auto-prefixed with `+91 ` in the header.                                                               |
| `email`   | `string` | The email address to be displayed.                                                                                                       |
| `skills`  | `string` | Custom skills list. Format: Categories separated by commas (`,`), with keywords inside each category separated by underscores (`_`).       |
| `sum`     | `string` | Defines whether to show the summary. If omitted or falsy, the Summary section is hidden.                                                 |
| `spg`     | `string` | Single page mode configuration parameter (parsed into `singlePage` internally).                                                          |
| `json`    | `string` | A JSON-encoded string that overrides any default resume data structure fields.                                                           |

### Example Customization URL

```
http://localhost:5173/?sum=1&skills=Languages_Python_Go,Frameworks_React_NestJS&phone=9873526069
```

---

## JSON Overrides Structure

If you use the `json` query parameter, it must match the following TypeScript schema:

```typescript
type Resume = {
  headings: Headings;
  summary: string;
  basics: Basics;
  education: Education[];
  work: WorkExperience[];
  skills: Skill[];
  projects: Project[];
  awards: Award[];
  sections: string[];
};

type Headings = {
  work: string;
  awards: string;
  education: string;
  skills: string;
  projects: string;
  summary: string;
};

type Basics = {
  name: string; // The candidate name
  email: string;
  website: string;
  phone: string;
};

type Education = {
  area: string;
  studyType: string;
  endDate: string;
  gpa: string;
  institution: string;
  location: string;
  startDate: string;
};

type WorkExperience = {
  website?: string;
  endDate: string;
  highlights: string[];
  company: string;
  position: string;
  location: string;
  startDate: string;
};

type Skill = {
  level?: string;
  keywords: string[];
  name?: string;
};

type Project = {
  keywords: string[];
  name: string;
  description: string;
  url?: string;
};

type Award = {
  date: string;
  awarder: string;
  summary: string;
  title: string;
};
```

### Example Overriding JSON

```json
{
  "basics": {
    "name": "Alex Johnson",
    "email": "alex.johnson@example.com",
    "website": "https://alexjohnson.dev",
    "phone": "+1 555-123-4567"
  },
  "headings": {
    "work": "Experience",
    "awards": "Achievements",
    "education": "Education",
    "skills": "Technical Skills",
    "projects": "Notable Projects",
    "summary": "About Me"
  },
  "skills": [
    {
      "level": "Advanced",
      "keywords": ["JavaScript", "TypeScript", "Python"],
      "name": "Programming Languages"
    }
  ],
  "work": [
    {
      "website": "https://techstartup.com",
      "endDate": "Present",
      "highlights": [
        "Leading front-end development using React and TypeScript.",
        "Optimized web builds, reducing load time by 30%."
      ],
      "company": "Tech Startup",
      "position": "Lead Software Engineer",
      "location": "San Francisco, CA",
      "startDate": "July 2024"
    }
  ],
  "sections": ["work", "skills", "projects", "awards", "education"]
}
```

---

## Layout & Features

### 1. Work Experience Grouping
The Work Experience UI is designed to:
- **Show company before designation**: Renders company name prominently on the left before the designation/position.
- **Group multiple roles under the same company**: If multiple designations exist for a company, the company name is shown only once as a parent heading (with the company's website link and location). The individual roles are rendered underneath, indented and aligned with their specific date ranges and highlights.

### 2. Styling System
Styles are defined in `src/resume.scss`. The stylesheet uses exactly **three global font size variables** to maintain consistent typography:
- `--fontSize-lg` (e.g. `20pt`): Used for candidate's name.
- `--fontSize-md` (e.g. `9.5pt`): Used for base text, section titles, item headings, and award titles.
- `--fontSize-sm` (e.g. `8.5pt`): Used for secondary details, contact links, job dates, subheaders, skills list, and description details.
