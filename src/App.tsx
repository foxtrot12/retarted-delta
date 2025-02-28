import "./font.scss";
import "./flex.scss";
import Resume from "./resume";
import { useEffect, useMemo } from "react";
import { ResumeData, commonData } from "./const/common";
import { ngData } from "./const/ng";
import { reactData } from "./const/react";
import { stdData } from "./const/std";

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    template: params.get("temp") as RTypeT,
    phone: params.get("phone"),
    email: params.get("email"),
    skills: params.get("skills"),
    skillInd:params.get("sind")
  };
}

function getResumeData(
  rType: RTypeT,
  phone: string | null,
  email: string | null,
  skills: string | null,
  skillInd:string|null
): ResumeData {
  const skillIndex = !Number.isNaN(Number(skillInd)) ? Number(skillInd) : 2
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

  if (skills) {
    const skillsArr = skills?.split("_");
    specData.skills[skillIndex].keywords = [
      ...specData.skills[skillIndex].keywords,
      ...skillsArr,
    ];
  }

  // @ts-ignore
  return { ...specData, ...cData };
}

function App() {
  const { template, phone, email, skills,skillInd } = useMemo(
    () => getQueryParams(),
    []
  );

  const resumeData = useMemo(
    () => getResumeData(template ?? "std", phone, email, skills,skillInd),
    []
  );

  useEffect(() => {
    window.print()
  }, []);

  return (
    <main className="flex contentCtr retartedDelta roboto-mono">
      <Resume resumeData={resumeData} />
    </main>
  );
}

export default App;

export interface ResumeParams {
  rType: RTypeT;
}

export type RTypeT = "react" | "ng" | "std";
