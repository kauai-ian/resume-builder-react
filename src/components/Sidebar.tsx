import styled from "styled-components";
import PersonalDetails from "./personal-info/PersonalDetails";
import { useState } from "react";
// still need to do the data input into the sidebar

// define the structure shape of an object. describes props. 
interface PersonalProps {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const Sidebar = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalProps>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handlePersonalDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <StyledSidebar>
      <h2>Enter your info here</h2>
      <PersonalDetails
        onChange={handlePersonalDetailsChange}
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phone={personalInfo.phone}
        address={personalInfo.address}
      />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
