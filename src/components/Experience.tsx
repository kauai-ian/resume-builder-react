import styled from "styled-components";
import { ChangeEventHandler } from "react";
import { Buttons } from "./helpers/button";
import { WithActions } from "./helpers/withActionsProps";

//define object props
interface ExperienceDetailsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  onChange,
  company,
  position,
  startDate,
  endDate,
  location,
  description,
  id,
}: ExperienceDetailsProps) => {
  return (
    <WithActions
      cancelText="Cancel"
      saveText="Save"
      removeText="Delete"
    >
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
          <Buttons
            onCancel={handleCancel}
            onSave={handleSave}
            onRemove={handleRemove}
            cancelText="Cancel"
            saveText="Save"
            removeText="Delete"
          />
        </FormStyled>
      </FormContainer>
    </WithActions>
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

export default ExperienceDetails;
