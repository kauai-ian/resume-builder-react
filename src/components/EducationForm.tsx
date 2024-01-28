// import { ChangeEventHandler } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ButtonForm } from "./helpers/buttonForm";


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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData: EducationData = {
      ...formData,
      id: uuid(),
    };
    onFormSubmit(newFormData);
    console.log("Save education", newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("ed input change", formData)
  };

  const handleClearForm = () => {
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
    <FormContainer className="educationContainer">
      <h3>Education</h3>
      <FormStyled data-array="education" onSubmit={handleSubmit}>
        <Label>
          School
          <Input
            type="text"
            value={formData.school}
            onChange={handleInputChange}
            name="school"
          />
        </Label>
        <Label>
          Degree
          <Input
            type="text"
            value={formData.degree}
            onChange={handleInputChange}
            name="degree"
          />
        </Label>
        <Label>
          Start Date
          <Input
            type="text"
            value={formData.startDate}
            onChange={handleInputChange}
            name="startDate"
          />
        </Label>
        <Label>
          End Date
          <Input
            type="text"
            value={formData.endDate}
            onChange={handleInputChange}
            name="endDate"
          />
        </Label>
        <Label>
          Location
          <Input
            type="text"
            value={formData.location}
            onChange={handleInputChange}
            name="location"
          />
        </Label>
        <ButtonForm onRemove={handleClearForm} />
        
      </FormStyled>
    </FormContainer>
  );
};
