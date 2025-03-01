import "./font.scss";
import "./flex.scss";
import Resume from "./resume";
import { useEffect } from "react";
import { useCustomization } from "./useCustomization";

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
    // window.print()
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

export type RTypeT = "react" | "ng" | "std";
