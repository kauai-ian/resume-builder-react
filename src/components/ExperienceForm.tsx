import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ButtonForm } from "./helpers/buttonForm";

export type ExperienceData = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
};

export const ExperienceForm: React.FC<{
  onFormSubmit: (formData: ExperienceData) => void;
}> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<ExperienceData>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    id: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFormData: ExperienceData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);
    console.log("Save experience", newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}))
    console.log("exp input change")
  }

  const handleRemove = () => {
    setFormData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      id: "",
    })
    console.log("remove")
  }

  return (
    <FormContainer className="experienceContainer">
      <h3>Experience</h3>
      <FormStyled data-array="experience" onSubmit={handleSubmit}>
        <Label >Company
        <Input
          type="text"
          placeholder="The Jimmy Hendrix Experience"
          value={formData.company}
          onChange={handleInputChange}
          name="company"
        /></Label>
        <Label >Position
        <Input
          type="text"
          placeholder="Guitarist"
          value={formData.position}
          onChange={handleInputChange}
          name="position"
        /></Label>
        <Label >Start Date
        <Input
          type="text"
          placeholder=""
          value={formData.startDate}
          onChange={handleInputChange}
          name="startDate"
        /></Label>
        <Label >End Date
        <Input
          type="text"
          placeholder=""
          value={formData.endDate}
          onChange={handleInputChange}
          name="endDate"
        /></Label>
        <Label >Location
        <Input
          type="text"
          placeholder="San Francisco CA"
          value={formData.location}
          onChange={handleInputChange}
          name="location"
        /></Label>
        <Label >Description
        <Input
          type="textarea"
          placeholder="Traveled the world playing music that changed people forever"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
        /></Label>
        <ButtonForm onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
