import styled from "styled-components";
import PersonalDetails from "./personal-info/PersonalDetails";
import { useState } from "react";
// still need to do the data input into the sidebar

interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  }

const Sidebar = () => {
const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({fullName: "", email: "",
phone: "", address: "",})

const handlePersonalDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setPersonalInfo({...personalInfo,[name]:value})
}


  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
       <PersonalDetails onChange={handlePersonalDetailsChange} />
      
      
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
display: flex;
flex-direction: column`;

export default Sidebar;
