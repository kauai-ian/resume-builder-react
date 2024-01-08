import { ChangeEventHandler } from "react";
import styled from "styled-components";

//define object props
interface PersonalDetailsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  id: string;
}

const PersonalDetails = ({
  onChange,
  email,
  fullName,
  phone,
  address,
  id,
}: PersonalDetailsProps) => {
  return (
    <FormContainer className="personalInfo">
      <h3>Personal Info</h3>
      <FormStyled>
        <Label htmlFor={`${id}-fullName`}>Full Name</Label>
        <Input
          type="text"
          id={`${id}-fullName`}
          placeholder="Jimmy Hendrix"
          value={fullName}
          onChange={onChange}
          name="fullName"
        />
        <Label htmlFor={`${id}-email`}>Email</Label>
        <Input
          type="email"
          id={`${id}-email`}
          placeholder="jimmyHendrixGuitar@gmail.com"
          value={email}
          onChange={onChange}
          name="email"
        />
        <Label htmlFor={`${id}-phone`}>Phone</Label>
        <Input
          type="tel"
          id={`${id}-phone`}
          placeholder="1-800-call-jimm"
          value={phone}
          onChange={onChange}
          name="phone"
        />
        <Label htmlFor={`${id}-address`}>Address</Label>
        <Input
          type="text"
          id={`${id}-address`}
          placeholder="123 Wallaby Way, Sydney Australia"
          value={address}
          onChange={onChange}
          name="address"
        />
      </FormStyled>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid white;
  padding: 10px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input``;

export default PersonalDetails;
