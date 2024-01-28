import { useState } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { ButtonForm } from "./helpers/buttonForm";
import { v4 as uuid } from "uuid";
import { PersonalData } from "./PersonalData";

export type PersonalData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  id: string;
};

export const PersonalForm: React.FC<{
  onFormSubmit: (formData: PersonalData) => void;
}> = ({ onFormSubmit }) => {
  const initState: PersonalData = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    id: uuid(),
  };
  const [formData, setFormData] = useState<PersonalData>(initState);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFormData: PersonalData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);
    console.log("save personal data", newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log("personal input change");
  };

  const handleClearForm = () => {
    setFormData(initState);
    console.log("remove");
  };
  return (
    <FormContainer className="personalInfo">
      <h3>Personal Info</h3>
      <FormStyled data-array="personal" onSubmit={handleSubmit}>
        <Label>
          Full Name
          <Input
            type="text"
            id={formData.id}
            value={formData.fullName}
            onChange={handleInputChange}
            name="fullName"
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            id={formData.id}
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            id={formData.id}
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
          />
        </Label>
        <Label>
          Address
          <Input
            type="text"
            id={formData.id}
            value={formData.address}
            onChange={handleInputChange}
            name="address"
          />
        </Label>
        <ButtonForm onRemove={handleClearForm} />
      </FormStyled>
    </FormContainer>
  );
};
