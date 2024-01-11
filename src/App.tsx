import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/MainSection";
// import { ResumeDisplay, PersonalInfo} from './components/ResumeDisplay';
// import { EducationForm, EducationData } from "./components/EducationForm";
// import React, {useState} from "react";

// parameters to pass in: the forms imported, the resume display jsx, the sidebar display jsx.
// when user clicks on save, the form submits and new memory is set. The display updates with the new data.

// TODO: the onChange is passed up as props to the App, where it is then set equal to a function to update state.

export const App: React.FC = () => {
  // useState for personal info, useState for sections seperately

  // previous sate when user clicks cancel
  // handler for personal info change
  // handler for ed section info change
  // const [educationData, setEducationData] = useState<EducationData[]>([]);

  // const handleFormSubmit = (data: EducationData) => {
  //   //   // update state
  //   setEducationData([...educationData, data]);
  // };
  // create form  so that each form has an array of object data [education, {degree, school, etc}]

  return (
    <>
      <Nav />
      <Container>
        <Sidebar />
        <Main></Main>
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
