import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
// import Main from "./components/MainSection";
import { ResumeDisplay } from "./components/ResumeDisplay";
import { EducationData, EducationForm } from "./components/EducationForm";
import React, { useState } from "react";
import { PersonalForm } from "./components/PersonalForm";
import { ExperienceForm } from "./components/ExperienceForm";

// parameters to pass in: the forms imported, the resume display jsx, the sidebar display jsx.
// when user clicks on save, the form submits and new memory is set. The display updates with the new data.

// TODO: the onChange is passed up as props to the App, where it is then set equal to a function to update state.

// useState for personal info, useState for sections seperately

// previous sate when user clicks cancel
// handler for personal info change
// handler for ed section info change

export const App: React.FC = () => {
  const [edFormData, setEducationData] = useState<EducationData[]>([]);

  const handleEducationFormSubmit = (newEdFormData: EducationData) => {
    setEducationData((prevEdData) => [...prevEdData, newEdFormData]);
  };

  const [perFormData, setPersonalData] = useState<PersonalData[]>([]);

  const handlePersonalFormSubmit = (newPerFormData: PersonalData) => {
    setPersonalData((prevPerData) => [...prevPerData, newPerFormData]);
  };

  const [expFormData, setExperienceData] = useState<ExperienceData[]>([]);

  const handleExperienceFormSubmit = (newExpFormData: ExperienceData) => {
    setExperienceData((prevExpData) => [...prevExpData, newExpFormData]);
  };
  return (
    <>
      <Nav />
      <Container>
        <Sidebar
          onEducationDataChange={setEducationData}
          onExperienceDataChange={setExperienceData}
          onPersonalDataChange={setPersonalData}
        >
          <PersonalForm onFormSubmit={handlePersonalFormSubmit} />
          <EducationForm onFormSubmit={handleEducationFormSubmit} />
          <ExperienceForm onFormSubmit={handleExperienceFormSubmit} />
        </Sidebar>

        <div className="main">
          <h2>Your Name Here</h2>
          <ResumeDisplay
            educationData={edFormData}
            personalData={perFormData}
            expData={expFormData}
          />{" "}
          {/* have to pass the formData into educationData so it can be lifted up through state and passed down.  */}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
