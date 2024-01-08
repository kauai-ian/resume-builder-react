import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/MainSection";



function App() {
  // useState for personal info, useState for sections seperately
  // previous sate when use clicks cancel
  // handler for personal info change
  // handler for section info change
  // create form  so that each form has an array of object data [education, {degree, school, etc}]
  

  return (
    <>
      <Nav /> 
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
