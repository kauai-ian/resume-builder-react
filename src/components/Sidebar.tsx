import styled from "styled-components";
import { PersonalForm } from "./PersonalForm";
import { EducationForm } from "./EducationForm";
import { ExperienceForm } from "./ExperienceForm";
import { useState } from "react";

const Sidebar = () => {
  const [personalInfo, setPersonalInfo] = useState({
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

  const [educationInfo, setEducationInfo] = useState({
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

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    id: "",
  });

  const handleExperienceDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setExperienceInfo({ ...experienceInfo, [name]: value });
  };

  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <PersonalForm
        onChange={handlePersonalDetailsChange}
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phone={personalInfo.phone}
        address={personalInfo.address}
        id={personalInfo.id}
      />
      <EducationForm
        onChange={handleEducationDetailsChange}
        school={educationInfo.school}
        degree={educationInfo.degree}
        startDate={educationInfo.startDate}
        endDate={educationInfo.endDate}
        location={educationInfo.location}
        id={educationInfo.id}
      />
      <ExperienceForm
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
