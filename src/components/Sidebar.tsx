import styled from "styled-components";
import { PersonalForm, PersonalData } from "./PersonalForm";
import { EducationForm, EducationData } from "./EducationForm";
import { ExperienceForm, ExperienceData } from "./ExperienceForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { ReactNode } from "react";

type SidebarProps = {
  handlePersonalFormSubmit: (perFormData: PersonalData) => void;
  handleEducationFormSubmit: (edFormData: EducationData) => void;
  handleExperienceFormSubmit: (expFormData: ExperienceData) => void;
  clearResume: () => void;
  children?: ReactNode
};

const Sidebar: React.FC<SidebarProps> = ({
  handlePersonalFormSubmit,
  handleEducationFormSubmit,
  handleExperienceFormSubmit,
  clearResume,
}) => {
  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <button onClick={clearResume}>
        <FontAwesomeIcon icon={faTrash as IconDefinition} /> Clear Entire Resumé
      </button>
      <PersonalForm onFormSubmit={handlePersonalFormSubmit} />
      <EducationForm onFormSubmit={handleEducationFormSubmit} />
      <ExperienceForm onFormSubmit={handleExperienceFormSubmit} />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export default Sidebar
