// displays the data
// personal info
// education section
// experience section
import styled from "styled-components";
import { PersonalData } from "./PersonalData";
import type { EducationData } from "./EducationForm";

// TODO: maybe a template of data so the resume displays on Page Load

// TODO: Try to understand how to display the data that is coming from the form as a ??? Array of objects???

type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

type EducationData = {school: string;
degree: string;
startDate: string;
endDate: string;
location: string;
id: string;
onSave: (data: EducationData) => void;}


export const ResumeDisplay: React.FC<{ personalData: PersonalInfo[]; educationData: EducationData[]; }> = ({
  educationData,
}) => {
  const capFrstLtr = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <ResumeContainer />
      {/* {<PersonalData
        fullName={personalData.fullName}
        email={personalData.email}
        phone={personalData.phone}
        address={personalData.address}
      >
        temp personal data cap first letter
      </PersonalData>} */}
      {/* TODO: add in data for education and experience*/}
      <EducationData
        onSave={handleSave}
        school={""}
        degree={""}
        startDate={""}
        endDate={""}
        location={""}
        id={""}
      >
        temp education data cap first letter
      </EducationData>
      {/* {<ExperienceData>temp experience data cap first letter</ExperienceData>} */}
    </>
  );
};

const ResumeContainer = styled.div`
  margin-bottom: 10px;
`;
