import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/MainSection"; 
import {ResumeDisplay} from './components/ResumeDisplay';
import { EducationData } from "./components/EducationForm";
import React, {useState} from "react";



export const App: React.FC = () => {
  // useState for personal info, useState for sections seperately
  
  // previous sate when use clicks cancel
  // handler for personal info change
  // handler for ed section info change
  const [educationData, setEducationData] = useState<EducationData[]>([]);

  const handleSaveEd = (data: EducationData) => {
    // update state
    setEducationData([...educationData, data]);
  };
  // create form  so that each form has an array of object data [education, {degree, school, etc}]
  

  
 
  

  return (
    <>
      <Nav /> 
      <Container>
        <Sidebar />
        <EducationForm onSave={handleSaveEd} />
        <Main >
          <ResumeDisplay educationData={educationData} />
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
