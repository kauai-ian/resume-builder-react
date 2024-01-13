import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { ResumeDisplay } from "./components/ResumeDisplay";
import { EducationData, EducationForm } from "./components/EducationForm";
import React, { useState } from "react";
import { PersonalForm, PersonalData } from "./components/PersonalForm";
import { ExperienceData, ExperienceForm } from "./components/ExperienceForm";
import {
  templateEducationData,
  templateExperienceData,
  templatePersonalData,
} from "./components/templateData";


export const App: React.FC = () => {
  // 1. personal
  const [perFormData, setPersonalData] = useState<PersonalData[]>([templatePersonalData]);

  const handlePersonalFormSubmit = (newPerFormData: PersonalData) => {
    setPersonalData((prevPerData) => [...prevPerData, newPerFormData]);
  };

  // 2. education
  const [edFormData, setEducationData] = useState<EducationData[]>([templateEducationData]);

  const handleEducationFormSubmit = (newEdFormData: EducationData) => {
    setEducationData((prevEdData) => [...prevEdData, newEdFormData]);
  };
  // 3. experience
  const [expFormData, setExperienceData] = useState<ExperienceData[]>([templateExperienceData]);

  const handleExperienceFormSubmit = (newExpFormData: ExperienceData) => {
    setExperienceData((prevExpData) => [...prevExpData, newExpFormData]);
  };

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
        </Main>
      </Container >
    </ >
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100vw;
`;

const Main = styled.div`
  width: 50vw;
  max-width: 800px;
  background-color: #1a1a1a;;
`;
