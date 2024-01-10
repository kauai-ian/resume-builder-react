import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const PersonalData: React.FC<{
  fullName: string;
  email: string;
  phone: string;
  address: string;
}> = ({ fullName, email, phone, address }) => {
  // const [personalData, setPersonalData] = useState("");
  return (
    <StyledDiv>
      <h1>{fullName}</h1>
      <div>
        <FontAwesomeIcon icon={faEnvelope as IconDefinition} /> {email}
      </div>
      <div>
        <FontAwesomeIcon icon={faPhone as IconDefinition} /> {phone}
      </div>
      <div>
        <FontAwesomeIcon icon={faLocation as IconDefinition} /> {address}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;
