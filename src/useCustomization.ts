import { useMemo } from "react";
import { RTypeT } from "./App";
import { ResumeData, commonData } from "./const/common";
import { ngData } from "./const/ng";
import { reactData } from "./const/react";
import { stdData } from "./const/std";
import { Themes } from "./const/themes";

function getResumeData(
  rType: RTypeT,
  phone: string | null,
  email: string | null,
  skills: string | null,
  skillInd: string | null,
  accessibility: string | null,
  json: string | null
): ResumeData {
  const customRData = json ? JSON.parse(json) : {};

  const skillIndex =
    skillInd && !Number.isNaN(Number(skillInd)) ? Number(skillInd) : 2;
  let specData;

  switch (rType) {
    case "ng":
      specData = ngData;
      break;
    case "react":
      specData = reactData;
      break;
    case "std":
      specData = stdData;
      break;
    default:
      specData = stdData;
      break;
  }

  const cData = { ...commonData };
  cData.basics.email = email ?? cData.basics.email;
  cData.basics.phone = phone ? `+91 ${phone}` : cData.basics.phone;

  if (!accessibility) {
    specData.projects = specData.projects.filter(
      (el) => el.name != "A11y-Ninja"
    );
  }

  if (skills) {
    const skillsArr = skills?.split("_");
    specData.skills[skillIndex].keywords = [
      ...specData.skills[skillIndex].keywords,
      ...skillsArr,
    ];
  }

  // @ts-ignore
  return { ...specData, ...cData,...customRData };
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    template: params.get("temp") as RTypeT,
    phone: params.get("phone"),
    email: params.get("email"),
    skills: params.get("skills"),
    skillInd: params.get("sind"),
    theme: params.get("theme"),
    accessibility: params.get("acc"),
    colors: params.get("colors"),
    json: params.get("json"),
  };
}

export function useCustomization() {
  const {
    colors,
    template,
    phone,
    email,
    skills,
    skillInd,
    theme,
    accessibility,
    json,
  } = useMemo(() => getQueryParams(), []);

  const resumeData = useMemo(
    () =>
      getResumeData(
        template ?? "std",
        phone,
        email,
        skills,
        skillInd,
        accessibility,
        json
      ),
    []
  );

  let [pColor, sColor, tColor, bgColor]: Array<string | null> = colors
    ? colors.split("_")
    : [];

  pColor = pColor ? `#${pColor}` : null;
  sColor = sColor ? `#${sColor}` : null;
  tColor = tColor ? `#${tColor}` : null;
  bgColor = bgColor ? `#${bgColor}` : null;

  const customData = theme ? Themes[theme] : null;

  return {
    fontClass: customData?.fontClass ?? null,
    italicFontClass: customData?.italicFontClass ?? null,
    pColor: pColor ?? customData?.primaryColor ?? null,
    sColor: sColor ?? customData?.secondaryColor ?? null,
    tColor: tColor ?? customData?.tertiaryColor ?? null,
    bgColor: bgColor ?? customData?.bg ?? null,
    resumeData,
  };
}
