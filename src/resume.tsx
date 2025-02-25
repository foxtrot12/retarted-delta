import { memo, useMemo } from "react";
import { ngData } from "./const/ng";
import { reactData } from "./const/react";
import { stdData } from "./const/std";
import { commonData } from "./const/common";

function getResumeData(rType: RTypeT) {
  let specData = {};

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
      break;
  }

  return { ...specData, ...commonData };
}

function Resume(props: ResumeParams) {
  const resumeData = useMemo(() => getResumeData(props.rType), []);

  return (
    <div className="resume flex hFull wFull">
      <h1 className="flex inline wFull contentCtr">
        <p className="wt300">{resumeData.basics.name[0]}</p>
        <p className="textHollow">{resumeData.basics.name[1]}</p>
      </h1>
      <h2></h2>
    </div>
  );
}

export default memo(Resume);

export interface ResumeParams {
  rType: RTypeT;
}

export type RTypeT = "react" | "ng" | "std";
