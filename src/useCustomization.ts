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
  accessibility: string | null,
  json: string | null,
  singlePage : string|null
): ResumeData {
  const customRData = json ? JSON.parse(json) : {};

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
    const skillsArr = skills?.split(",");

    skillsArr.forEach((el,i)=>{
      specData.skills[i].keywords =[...specData.skills[i].keywords, ...el.split('_')]
    })

  }

  const resumeData =  { ...specData, ...cData, ...customRData }

  if(singlePage){
    resumeData.work = resumeData.work.slice(0,2)
    resumeData.projects = resumeData.projects.slice(0,5)
  }

  // @ts-ignore
  return resumeData;
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    template: params.get("temp") as RTypeT,
    phone: params.get("phone"),
    email: params.get("email"),
    skills: params.get("skills"),
    theme: params.get("theme"),
    accessibility: params.get("acc"),
    colors: params.get("colors"),
    json: params.get("json"),
    singlePage : params.get("spg")
  };
}

export function useCustomization() {
  const {
    colors,
    template,
    phone,
    email,
    skills,
    theme,
    accessibility,
    json,
    singlePage
  } = useMemo(() => getQueryParams(), []);

  const resumeData = useMemo(
    () =>
      getResumeData(
        template ?? "std",
        phone,
        email,
        skills,
        accessibility,
        json,
        singlePage
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
