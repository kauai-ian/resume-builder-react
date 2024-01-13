import styled from "styled-components";
import { PersonalForm, PersonalData } from "./PersonalForm";
import { EducationForm, EducationData } from "./EducationForm";
import { ExperienceForm, ExperienceData } from "./ExperienceForm";
import { Dispatch, SetStateAction, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type SidebarProps = {
  onPersonalDataChange: Dispatch<SetStateAction<PersonalData[]>>;
  onEducationDataChange: Dispatch<SetStateAction<EducationData[]>>;
  onExperienceDataChange: Dispatch<SetStateAction<ExperienceData[]>>;
  children?: ReactNode;
  clearResume: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onEducationDataChange, onExperienceDataChange, onPersonalDataChange, clearResume }) => {
  const handlePersonalDetailsChange = (perFormData: PersonalData) => {
    onPersonalDataChange([perFormData]);
  };

  const handleEducationDetailsChange = (edFormData: EducationData) => {
    onEducationDataChange([edFormData]);
  };

  const handleExperienceDetailsChange = (expFormData: ExperienceData) => {
    onExperienceDataChange([expFormData]);
  };


  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <button onClick={clearResume}><FontAwesomeIcon icon={faTrash as IconDefinition} />{" "}Clear Entire Resumé</button>
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
