import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
import { ChangeEventHandler } from "react";
import { ButtonForm } from "./helpers/buttonForm";
// import { handleRemove, handleSave } from "./helpers/handlers";

export const ExperienceForm: React.FC<{
  onChange: ChangeEventHandler<HTMLInputElement>;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
}> = ({
  onChange,
  company,
  position,
  startDate,
  endDate,
  location,
  description,
  id,
}) => {
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
          type="date"
          id={`${id}-startDate`}
          placeholder=""
          value={startDate}
          onChange={onChange}
          name="startDate"
        />
        <Label htmlFor={`${id}-endDate`}>End Date</Label>
        <Input
          type="date"
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
          type="textbox"
          id={`${id}-description`}
          placeholder="Traveled the world playing music that changed people forever"
          value={description}
          onChange={onChange}
          name="description"
        />
        <ButtonForm onSave={handleSave} onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
