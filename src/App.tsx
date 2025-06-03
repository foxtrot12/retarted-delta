import "./font.scss";
import "./flex.scss";
import Resume from "./resume";
import { useEffect } from "react";
import { useCustomization } from "./useCustomization";

function downloadObjectAsJson<T>(exportObj: T, exportName: string): void {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `${exportName}.json`);
  
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
}

function App() {
  const {
    fontClass,
    italicFontClass,
    pColor,
    sColor,
    tColor,
    bgColor,
    resumeData,
  } = useCustomization();

  useEffect(() => {
    const downloadData : any = {...resumeData}
    downloadData.basics.name = resumeData.basics.name[0]+' '+resumeData.basics.name[1]
    downloadObjectAsJson(resumeData,`resume.json`)
    window.print()
  }, []);

  return (
    <main className="flex contentCtr retartedDelta">
      <Resume
        resumeData={resumeData}
        fontClass={fontClass}
        italicFontClass={italicFontClass}
        pColor={pColor}
        sColor={sColor}
        tColor={tColor}
        bgColor={bgColor}
      />
    </main>
  );
}

export default App;

export interface ResumeParams {
  rType: RTypeT;
}

export type RTypeT = "react" | "ng" | "std" | "next" | "mern";
