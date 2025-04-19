# Resume Webpage Query Parameters

This document outlines the query parameters that can be used with the resume webpage to customize the resume data and appearance.

## Query Parameters

| Parameter | Type     | Description                                                                                                             |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `temp`    | `string` | Specifies the resume template type. Possible values: `ng`, `react`, `std`. Default: `std`.                              |
| `phone`   | `string` | The phone number to be displayed on the resume. Prefixed with `+91`.                                                    |
| `email`   | `string` | The email address to be displayed on the resume.                                                                        |
| `skills`  | `string` | A list of skills separated by comma (`,`) for skill category and underscore (`_`) for individual skills. These will be added to the resume skills section.                      |
| `theme`   | `string` | Defines the theme to be applied to the resume. Uses predefined themes if available.                                     |
| `acc`     | `string` | If provided, accessibility-related projects will be included in the resume. Otherwise, `A11y-Ninja` project is removed. |
| `colors`  | `string` | Defines custom colors for the resume in the format `primary_secondary_tertiary_background` as hex codes (without `#`).  |
| `json`    | `string` | A JSON string that overrides default resume data.                                                                       |

## Example Usage

To generate a resume with specific customizations, you can use the following URL format:

```
https://foxtrot12.github.io/retarted-delta/?theme=amazon&skills=Python,Ionic_Next,Tailwind_jQuery_WebGL_PixiJS&temp=react

```

## Notes

- If `json` is provided, it is parsed and merged with the default resume data.
- The `colors` parameter must have exactly four values seperated by '\_', representing primary, secondary, tertiary, and background colors, if a value such as '\_\_\_445566' is passed it will override background color and use default for all others.
- The `sind` parameter should be a valid number; otherwise, it defaults to `2`.
- The `acc` parameter is optional. If omitted, the `A11y-Ninja` project is removed from the resume.

This guide provides an overview of how query parameters can be used to customize resume data dynamically.

The type deinations for json string are

```typescript
type Resume = {
  skills: Skill[];
  projects: Project[];
  awards: Award[];
  headings: Headings;
  basics: Basics;
  education: Education[];
  work: WorkExperience[];
  sections: string[];
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

type Headings = {
  work: string;
  awards: string;
  education: string;
  skills: string;
  projects: string;
};

type Basics = {
  name: string[];
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
```

Example for custom JSON and url with JSON
```json
{
    "skills": [
        {
            "level": "Advanced",
            "keywords": ["JavaScript", "TypeScript", "Python", "Java"],
            "name": "Programming Languages"
        },
        {
            "keywords": ["React", "Node.js", "Express", "Django", "Spring Boot"],
            "name": "Frameworks"
        },
        {
            "keywords": ["GraphQL", "REST API", "MongoDB", "PostgreSQL", "AWS", "Docker"],
            "name": "Others"
        }
    ],
    "projects": [
        {
            "keywords": ["React", "TypeScript", "GraphQL", "Node.js"],
            "name": "Project Nexus",
            "description": "Developed a SaaS platform enabling businesses to integrate AI-driven analytics into their operations.",
            "url": "https://nexus.example.com"
        },
        {
            "keywords": ["Django", "PostgreSQL", "AWS", "Python"],
            "name": "HealthTracker",
            "description": "Built a health monitoring application that helps users track their vitals and receive AI-driven recommendations."
        }
    ],
    "awards": [
        {
            "date": "June 2023",
            "awarder": "Tech Innovators",
            "summary": "Recognized for outstanding contributions to AI-driven web platforms.",
            "title": "Best AI Developer Award"
        }
    ],
    "headings": {
        "work": "Experience",
        "awards": "Achievements",
        "education": "Education",
        "skills": "Technical Skills",
        "projects": "Notable Projects"
    },
    "basics": {
        "name": ["Alex", "Johnson"],
        "email": "alex.johnson@example.com",
        "website": "https://alexjohnson.dev",
        "phone": "+1 555-123-4567"
    },
    "education": [
        {
            "area": "Software Engineering",
            "studyType": "M.Sc.",
            "endDate": "May 2021",
            "gpa": "3.9",
            "institution": "MIT",
            "location": "Cambridge, MA",
            "startDate": "August 2019"
        }
    ],
    "work": [
        {
            "website": "https://techstartup.com",
            "endDate": "Present",
            "highlights": [
                "Leading the AI development team at a growing tech startup.",
                "Developed a scalable backend using GraphQL and Node.js.",
                "Migrated the company’s infrastructure to AWS."
            ],
            "company": "Tech Startup",
            "position": "Lead Software Engineer",
            "location": "San Francisco, CA",
            "startDate": "July 2021"
        }
    ],
    "sections": ["work", "skills", "projects", "awards", "education"]
}
```

```
https://foxtrot12.github.io/retarted-delta/?theme=color&json={%22skills%22:[{%22level%22:%22Advanced%22,%22keywords%22:[%22JavaScript%22,%22TypeScript%22,%22Python%22,%22Java%22],%22name%22:%22Programming%20Languages%22},{%22keywords%22:[%22React%22,%22Node.js%22,%22Express%22,%22Django%22,%22Spring%20Boot%22],%22name%22:%22Frameworks%22},{%22keywords%22:[%22GraphQL%22,%22REST%20API%22,%22MongoDB%22,%22PostgreSQL%22,%22AWS%22,%22Docker%22],%22name%22:%22Others%22}],%22projects%22:[{%22keywords%22:[%22React%22,%22TypeScript%22,%22GraphQL%22,%22Node.js%22],%22name%22:%22Project%20Nexus%22,%22description%22:%22Developed%20a%20SaaS%20platform%20enabling%20businesses%20to%20integrate%20AI-driven%20analytics%20into%20their%20operations.%22,%22url%22:%22https://nexus.example.com%22},{%22keywords%22:[%22Django%22,%22PostgreSQL%22,%22AWS%22,%22Python%22],%22name%22:%22HealthTracker%22,%22description%22:%22Built%20a%20health%20monitoring%20application%20that%20helps%20users%20track%20their%20vitals%20and%20receive%20AI-driven%20recommendations.%22}],%22awards%22:[{%22date%22:%22June%202023%22,%22awarder%22:%22Tech%20Innovators%22,%22summary%22:%22Recognized%20for%20outstanding%20contributions%20to%20AI-driven%20web%20platforms.%22,%22title%22:%22Best%20AI%20Developer%20Award%22}],%22headings%22:{%22work%22:%22Experience%22,%22awards%22:%22Achievements%22,%22education%22:%22Education%22,%22skills%22:%22Technical%20Skills%22,%22projects%22:%22Notable%20Projects%22},%22basics%22:{%22name%22:[%22Alex%22,%22Johnson%22],%22email%22:%22alex.johnson@example.com%22,%22website%22:%22https://alexjohnson.dev%22,%22phone%22:%22+1%20555-123-4567%22},%22education%22:[{%22area%22:%22Software%20Engineering%22,%22studyType%22:%22M.Sc.%22,%22endDate%22:%22May%202021%22,%22gpa%22:%223.9%22,%22institution%22:%22MIT%22,%22location%22:%22Cambridge,%20MA%22,%22startDate%22:%22August%202019%22}],%22work%22:[{%22website%22:%22https://techstartup.com%22,%22endDate%22:%22Present%22,%22highlights%22:[%22Leading%20the%20AI%20development%20team%20at%20a%20growing%20tech%20startup.%22,%22Developed%20a%20scalable%20backend%20using%20GraphQL%20and%20Node.js.%22,%22Migrated%20the%20company%E2%80%99s%20infrastructure%20to%20AWS.%22],%22company%22:%22Tech%20Startup%22,%22position%22:%22Lead%20Software%20Engineer%22,%22location%22:%22San%20Francisco,%20CA%22,%22startDate%22:%22July%202021%22}],%22sections%22:[%22work%22,%22skills%22,%22projects%22,%22awards%22,%22education%22]}
```
