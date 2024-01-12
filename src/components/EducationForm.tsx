// import { ChangeEventHandler } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";

export type EducationData = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
};

export const EducationForm: React.FC<{
  onFormSubmit: (formData: EducationData) => void;
}> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<EducationData>({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: "",
  });

  const handleSave: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFormData: EducationData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);

    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      id: "",
    });
    console.log("Save education", newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("input change", formData)
  };

  const clearForm = () => {
    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      id: "",
    });
    console.log("Remove");
  };

  return (
    <FormContainer className="EducationContainer">
      <h3>Education</h3>
      <FormStyled data-array="education" onSubmit={handleSave}>
        <Label>
          School
          <Input
            type="text"
            placeholder="School of Hard Rock"
            value={formData.school}
            onChange={handleInputChange}
            name="school"
          />
        </Label>
        <Label>
          Degree
          <Input
            type="text"
            placeholder="Music"
            value={formData.degree}
            onChange={handleInputChange}
            name="degree"
          />
        </Label>
        <Label>
          Start Date
          <Input
            type="text"
            placeholder="1/1/1958"
            value={formData.startDate}
            onChange={handleInputChange}
            name="startDate"
          />
        </Label>
        <Label>
          End Date
          <Input
            type="text"
            placeholder="1/1/1962"
            value={formData.endDate}
            onChange={handleInputChange}
            name="endDate"
          />
        </Label>
        <Label>
          Location
          <Input
            type="text"
            placeholder="USA"
            value={formData.location}
            onChange={handleInputChange}
            name="location"
          />
        </Label>
        <ButtonContainerStyled>
          <button className="delete" onClick={clearForm} type="button">
            <FontAwesomeIcon icon={faTrash as IconDefinition} /> Remove
          </button>
          <button className="save" type="submit">
            <FontAwesomeIcon icon={faSave as IconDefinition} /> Save
          </button>
        </ButtonContainerStyled>
      </FormStyled>
    </FormContainer>
  );
};

export const ButtonContainerStyled = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ButtonStyled = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 10px;
`;

export const OutlinedButton = styled(ButtonStyled)`
  background-color: transparent;
  color: #fff;
`;
