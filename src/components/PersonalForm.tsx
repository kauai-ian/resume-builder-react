import { ChangeEventHandler } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { ButtonForm } from "./helpers/buttonForm";
import { handleRemove, handleSave } from "./helpers/handlers";

export const PersonalForm: React.FC<{
  onChange: ChangeEventHandler<HTMLInputElement>;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  id: string;
}> = ({ onChange, email, fullName, phone, address, id }) => {
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
        <ButtonForm onSave={handleSave} onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
