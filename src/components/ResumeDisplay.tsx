// displays the data
// personal info
// education section
// experience section
import styled from "styled-components";
import { PersonalData } from "./PersonalData";

<TODO>Try to understand how to display the data that is coming from the form as a ??? Array of objects???</TODO>

type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export const ResumeDisplay: React.FC<{personalData: PersonalInfo[]}> = ({ personalData, sections, layout }) => {
  return (
    <>
      <ResumeContainer />
      <PersonalData fullName={personalData.fullName} email={personalData.email} phone={personalData.phone} address={personalData.address} />
      
    </>
  );
};

const ResumeContainer = styled.div`
  margin-bottom: 10px;
`;
