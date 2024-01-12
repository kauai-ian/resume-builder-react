import styled from "styled-components";
// import { PersonalData } from "./PersonalData";
import { EducationInfo, EducationInfoProps } from "./EducationInfo";
// import { ChangeEvent } from "react";

export const ResumeDisplay: React.FC<{
  educationData: EducationInfoProps[];
}> = ({ educationData }) => {
  console.log("educationData", {educationData})
  return (
    <>
    
      {educationData.map((data, index) => (
        <ResumeContainer key={index}>
          <EducationInfo
            school={data.school}
            degree={data.degree}
            startDate={data.startDate}
            endDate={data.endDate}
            location={data.location}
            id={data.id}
          />
        </ResumeContainer>
      ))}
      <p>test data</p>
    </>
  );
};

const ResumeContainer = styled.div`
  margin-bottom: 10px;
`;
{
  /* <ResumeContainer
        educationData={[]}
        onFormSubmit={(formData) => console.log("Form submitted", formData)}
      ></ResumeContainer> */
}
