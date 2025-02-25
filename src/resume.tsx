import { memo, useMemo } from "react"

function getResumeData(rType : RTypeT){
    switch rType
}

function Resume(props:ResumeParams){

    const resumeData = useMemo(()=>{
        props.rType 
    },[])
    
    return <div className="resume">

    </div>
}

export default memo(Resume)

export interface ResumeParams{
    rType: RTypeT;
}

export type RTypeT = 'react'|'ng'|'std'