import styled from "styled-components";
import { PersonalForm } from "./PersonalForm";
import { EducationForm, EducationData } from "./EducationForm";
import { ExperienceForm } from "./ExperienceForm";
import { Dispatch, SetStateAction, ReactNode } from "react";

type SidebarProps = {
  onPersonalDataChange: Dispatch<SetStateAction<EducationData[]>>;
  onEducationDataChange: Dispatch<SetStateAction<EducationData[]>>;
  onExperienceDataChange: Dispatch<SetStateAction<EducationData[]>>;
  children?: ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ onEducationDataChange }) => {
  const handlePersonalDetailsChange = (formData: PersonalData) => {
    onPersonalDataChange([formData]);
  };

  const handleEducationDetailsChange = (formData: EducationData) => {
    onEducationDataChange([formData]);
  };

  const handleExperienceDetailsChange = (formData: ExperienceData) => {
    onExperienceDataChange([formData]);
  };

  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <PersonalForm onFormSubmit={handlePersonalDetailsChange} />
      <EducationForm onFormSubmit={handleEducationDetailsChange} />
      <ExperienceForm onFormSubmit={handleExperienceDetailsChange} />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Sidebar;
