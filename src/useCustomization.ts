import { useMemo } from "react";
import { ResumeData, commonData } from "./const/common";

function getResumeData(
  phone: string | null,
  email: string | null,
  skills: string | null,
  json: string | null,
  summary: string | null,
): ResumeData {
  const customRData = json ? JSON.parse(json) : {};

  const cData = { ...commonData };

  cData.basics.email = email ?? cData.basics.email;
  cData.basics.phone = phone ? `+91 ${phone}` : cData.basics.phone;

  if (!summary) {
    cData.summary = ""
  }


  if (skills) {
    const skillsArr = skills?.split(",");

    skillsArr.forEach((el, i) => {
      cData.skills[i].keywords = [...cData.skills[i].keywords, ...el.split('_')]
    })

  }

  const resumeData = { ...cData, ...customRData }


  // @ts-ignore
  return resumeData;
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    phone: params.get("phone"),
    email: params.get("email"),
    skills: params.get("skills"),
    json: params.get("json"),
    singlePage: params.get("spg"),
    summary: params.get("sum"),
  };
}

export function useCustomization() {
  const {
    phone,
    email,
    skills,
    json,
    summary,
  } = useMemo(() => getQueryParams(), []);

  const resumeData = useMemo(
    () =>
      getResumeData(
        phone,
        email,
        skills,
        json,
        summary,
      ),
    []
  );

  return {
    resumeData,
  };
}
