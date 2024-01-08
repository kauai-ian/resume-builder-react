import styled from "styled-components";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./Experience";
import { useState } from "react";
// still need to do the data input into the sidebar

// define the structure shape of an object. describes props.
interface PersonalDetailsProps {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  id: string;
}

interface EducationDetailsProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}

interface ExperienceDetailsProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
}

const Sidebar = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalDetailsProps>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    id: "",
  });

  const handlePersonalDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const [educationInfo, setEducationInfo] = useState<EducationDetailsProps>({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: "",
  });

  const handleEducationDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  const [experienceInfo, setExperienceInfo] = useState<ExperienceDetailsProps>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    id: "",
  });

  const handleExperienceDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value} = e.target;
      setExperienceInfo({...experienceInfo, [name]:value})
    }

  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <PersonalDetails
        onChange={handlePersonalDetailsChange}
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phone={personalInfo.phone}
        address={personalInfo.address}
        id={personalInfo.id}
      />
      <EducationDetails
        onChange={handleEducationDetailsChange}
        school={educationInfo.school}
        degree={educationInfo.degree}
        startDate={educationInfo.startDate}
        endDate={educationInfo.endDate}
        location={educationInfo.location}
        id={educationInfo.id}
      />
      <ExperienceDetails
        onChange={handleExperienceDetailsChange}
        company={experienceInfo.company}
        position={experienceInfo.position}
        startDate={experienceInfo.startDate}
        endDate={experienceInfo.endDate}
        location={experienceInfo.location}
        description={experienceInfo.description}
        id={experienceInfo.id}
      />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Sidebar;
