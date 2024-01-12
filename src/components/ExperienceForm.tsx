import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";

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

  const handleSave: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFormData: ExperienceData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);

    setFormData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      id: "",
    });
    console.log("Save experience", newFormData);
  };

  return (
    <FormContainer className="experienceInfo">
      <h3>Experience</h3>
      <FormStyled>
        <Label htmlFor={`${id}-company`}>Company</Label>
        <Input
          type="text"
          id={`${id}-company`}
          placeholder="Self employed"
          value={company}
          onChange={onChange}
          name="company"
        />
        <Label htmlFor={`${id}-position`}>Position</Label>
        <Input
          type="text"
          id={`${id}-position`}
          placeholder="Guitarist"
          value={position}
          onChange={onChange}
          name="position"
        />
        <Label htmlFor={`${id}-startDate`}>Start Date</Label>
        <Input
          type="text"
          id={`${id}-startDate`}
          placeholder=""
          value={startDate}
          onChange={onChange}
          name="startDate"
        />
        <Label htmlFor={`${id}-endDate`}>End Date</Label>
        <Input
          type="text"
          id={`${id}-endDate`}
          placeholder=""
          value={endDate}
          onChange={onChange}
          name="endDate"
        />
        <Label htmlFor="">Location</Label>
        <Input
          id={`${id}-location`}
          type="text"
          placeholder="Worldwide"
          value={location}
          onChange={onChange}
          name="location"
        />
        <Label htmlFor={`${id}-description`}>Description</Label>
        <Input
          type="textarea"
          id={`${id}-description`}
          placeholder="Traveled the world playing music that changed people forever"
          value={description}
          onChange={onChange}
          name="description"
        />
        <ButtonForm onSave={handleSubmit} onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
