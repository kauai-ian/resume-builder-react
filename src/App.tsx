import { useState } from "react";
import "./App.css";
import styled from 'styled-components';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Main from './components/MainSection';


function App() {



  return <>
    <Nav />
    <Container >
      <Sidebar />
      <Main />
    </Container>
  </>;
}

export default App;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;`;