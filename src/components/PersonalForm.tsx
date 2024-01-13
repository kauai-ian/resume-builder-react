import { useState } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { ButtonForm } from "./helpers/buttonForm";
import { v4 as uuid } from "uuid";

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
  const [formData, setFormData] = useState<PersonalData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    id: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFormData: PersonalData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      id: "",
    });
    console.log("save personal data", newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log("personal input change");
  };

  const handleRemove = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      id: "",
    });
    console.log("remove");
  };
  return (
    <FormContainer className="personalInfo">
      <h3>Personal Info</h3>
      <FormStyled data-array="personal" onSubmit={handleSubmit}>
        <Label >Full Name
        <Input
          type="text"
          id={formData.id}
          placeholder="Jimmy Hendrix"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName"
        /></Label>
        <Label >Email
        <Input
          type="email"
          id={formData.id}
          placeholder="jimmyHendrixGuitar@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        /></Label>
        <Label >Phone
        <Input
          type="tel"
          id={formData.id}
          placeholder="1-800-call-jimm"
          value={formData.phone}
          onChange={handleInputChange}
          name="phone"
        /></Label>
        <Label >Address
        <Input
          type="text"
          id={formData.id}
          placeholder="1524A Haight St., San Francisco CA"
          value={formData.address}
          onChange={handleInputChange}
          name="address"
        /></Label>
        <ButtonForm  onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
