import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface PersonalDetailsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const PersonalDetails = ({
  onChange,
  email,
  fullName,
  phone,
  address,
}: PersonalDetailsProps) => {
  return (
    <FormContainer className="personalInfo">
      <h3>Personal Info</h3>
      <FormStyled>
        <Label htmlFor="">Full Name</Label>
        <Input
          type="text"
          placeholder="Jimmy Hendrix"
          value={fullName}
          onChange={onChange}
          name="fullName"
        />
        <Label htmlFor="">Email</Label>
        <Input
          type="email"
          placeholder="jimmyHendrixGuitar@gmail.com"
          value={email}
          onChange={onChange}
          name="email"
        />
        <Label htmlFor="">Phone</Label>
        <Input
          type="tel"
          placeholder="1-800-call-jimm"
          value={phone}
          onChange={onChange}
          name="phone"
        />
        <Label htmlFor="">Address</Label>
        <Input
          type="text"
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
