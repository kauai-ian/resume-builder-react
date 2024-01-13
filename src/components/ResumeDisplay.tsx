import styled from "styled-components";
import { PersonalData, PersonalDataProps } from "./PersonalData";
import { EducationInfo, EducationInfoProps } from "./EducationInfo";
import { ExperienceDataProps, ExperienceInfo } from "./ExperienceInfo";
import { v4 as uuid } from "uuid";

export const ResumeDisplay: React.FC<{
  educationData: EducationInfoProps[];
  experienceData: ExperienceDataProps[];
  personalData: PersonalDataProps[];
}> = ({ personalData, educationData, experienceData }) => {
  // console.log("educationData", { educationData });
  // console.log("expData resume display", { experienceData });
  // console.log("personal resume display", { personalData });
  return (
    <div className="resumeContainer">
      <div></div>
      {personalData.map((data) => (
        <ResumeContainer key={uuid()}>
          <PersonalData
            fullName={data.fullName}
            email={data.email}
            phone={data.phone}
            address={data.address}
            id={data.id}
          />
        </ResumeContainer>
      ))}
      <h3 className="resume-subheading">Education</h3>
      {educationData.map((data) => (
        <ResumeContainer key={uuid()}>
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
      <h3 className="resume-subheading">Experience</h3>
      {experienceData.map((data) => (
        <ResumeContainer key={uuid()}>
          <ExperienceInfo
            company={data.company}
            position={data.position}
            startDate={data.startDate}
            endDate={data.endDate}
            location={data.location}
            description={data.description}
            id={data.id}
          />
        </ResumeContainer>
      ))}
    </div>
  );
};

const ResumeContainer = styled.div`
  margin-bottom: 10px;
`;
