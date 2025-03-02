# Resume Webpage Query Parameters

This document outlines the query parameters that can be used with the resume webpage to customize the resume data and appearance.

## Query Parameters

| Parameter | Type     | Description                                                                                                             |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `temp`    | `string` | Specifies the resume template type. Possible values: `ng`, `react`, `std`. Default: `std`.                              |
| `phone`   | `string` | The phone number to be displayed on the resume. Prefixed with `+91`.                                                    |
| `email`   | `string` | The email address to be displayed on the resume.                                                                        |
| `skills`  | `string` | A list of skills separated by underscores (`_`). These will be added to the resume skills section.                      |
| `sind`    | `string` | Skill index to determine where new skills should be added. Defaults to `2`.                                             |
| `theme`   | `string` | Defines the theme to be applied to the resume. Uses predefined themes if available.                                     |
| `acc`     | `string` | If provided, accessibility-related projects will be included in the resume. Otherwise, `A11y-Ninja` project is removed. |
| `colors`  | `string` | Defines custom colors for the resume in the format `primary_secondary_tertiary_background` as hex codes (without `#`).  |
| `json`    | `string` | A JSON string that overrides default resume data.                                                                       |

## Example Usage

To generate a resume with specific customizations, you can use the following URL format:

```
https://foxtrot12.github.io/retarted-delta/?theme=amazon&skills=Tailwind_jQuery_WebGL_PixiJS&temp=react
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
