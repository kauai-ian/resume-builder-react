import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { ResumeDisplay } from "./components/ResumeDisplay";
import { EducationData, EducationForm } from "./components/EducationForm";
import React, { useEffect, useState } from "react";
import { PersonalForm, PersonalData } from "./components/PersonalForm";
import { ExperienceData, ExperienceForm } from "./components/ExperienceForm";
import {
  templateEducationData,
  templateExperienceData,
  templatePersonalData,
} from "./components/templateData";
// parameters to pass in: the forms imported, the resume display jsx, the sidebar display jsx.
// when user clicks on save, the form submits and new memory is set. The display updates with the new data.

// TODO: the onChange is passed up as props to the App, where it is then set equal to a function to update state.

// useState for personal info, useState for sections seperately

// previous sate when user clicks cancel
// handler for personal info change
// handler for ed section info change

export const App: React.FC = () => {
  // 1. personal
  const [perFormData, setPersonalData] = useState<PersonalData[]>([]);

  const handlePersonalFormSubmit = (newPerFormData: PersonalData) => {
    setPersonalData((prevPerData) => [...prevPerData, newPerFormData]);
  };

  // 2. education
  const [edFormData, setEducationData] = useState<EducationData[]>([]);

  const handleEducationFormSubmit = (newEdFormData: EducationData) => {
    setEducationData((prevEdData) => [...prevEdData, newEdFormData]);
  };
  // 3. experience
  const [expFormData, setExperienceData] = useState<ExperienceData[]>([]);

  const handleExperienceFormSubmit = (newExpFormData: ExperienceData) => {
    setExperienceData((prevExpData) => [...prevExpData, newExpFormData]);
  };

  useEffect(() => {
    setPersonalData([templatePersonalData]);
    setEducationData([templateEducationData]);
    setExperienceData([templateExperienceData]);
  }, []);

  const clearResume = () => {
    setPersonalData([]);
    setEducationData([]);
    setExperienceData([]);
  };

  return (
    <>
      <Nav />
      <Container>
        <Sidebar
          onEducationDataChange={setEducationData}
          onExperienceDataChange={setExperienceData}
          onPersonalDataChange={setPersonalData}
          clearResume={clearResume}
        >
          {" "}
          
          <PersonalForm onFormSubmit={handlePersonalFormSubmit} />
          <EducationForm onFormSubmit={handleEducationFormSubmit} />
          <ExperienceForm onFormSubmit={handleExperienceFormSubmit} />
        </Sidebar>

        <Main>
          <h1>{perFormData.length > 0 && perFormData[0].fullName} </h1>
          <ResumeDisplay
            personalData={perFormData}
            educationData={edFormData}
            experienceData={expFormData}
          />{" "}
          {/* have to pass the formData into educationData so it can be lifted up through state and passed down as props to the form.  */}
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100vw;
`;

const Main = styled.div`
  flex: 1;
`;
