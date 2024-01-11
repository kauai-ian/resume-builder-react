
import styled from "styled-components";
// import { PersonalData } from "./PersonalData";
import { EducationInfo, EducationData } from "./EducationInfo";
// import { ChangeEvent } from "react";

// displays the data
// personal info
// education section
// experience section

// TODO: maybe a template of data so the resume displays on Page Load


export const ResumeDisplay: React.FC<{ educationData: EducationData[] }> = ({educationData}) => {
  return (
    <>
    {educationData.map((data, index) => (
      <ResumeContainer key={index} >
        <EducationInfo
          school={data.school}
          degree={data.degree}
          startDate={data.startDate}
          endDate={data.endDate}
          location={data.location}
          id={data.id} /> 
        
        </ResumeContainer>
      ))}
      <p>test data</p>
      </>
  );
};


const ResumeContainer = styled.div`
  margin-bottom: 10px;
`;
