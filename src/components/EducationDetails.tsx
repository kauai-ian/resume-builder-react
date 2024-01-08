import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { Buttons } from "./helpers/button";
import { WithActions } from "./helpers/withActionsProps";

//define object props
interface EducationDetailsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
  onCancel: () => void;
  onSave: () => void;
  onRemove: () => void;
  handleCancel: () => void;
  handleSave: () => void;
  handleRemove: () => void;
}

const EducationDetails = ({
  onChange,
  school,
  degree,
  startDate,
  endDate,
  location,
  id,
  onCancel,
  onRemove,
  onSave,
  handleCancel,
  handleRemove,
  handleSave,
}: EducationDetailsProps) => {
  return (
    <WithActions
      onCancel={onCancel}
      onRemove={onRemove}
      onSave={onSave}
      cancelText="Cancel"
      saveText="Save"
      removeText="Delete"
    >
      <FormContainer className="Education">
        <h3>Education</h3>
        <FormStyled>
          <Label htmlFor="">School</Label>
          <Input
            id={`${id}-school`}
            type="text"
            placeholder="School of Hard Rock"
            value={school}
            onChange={onChange}
            name="school"
          />
          <Label htmlFor="">Degree</Label>
          <Input
            id={`${id}-degree`}
            type="text"
            placeholder="Music"
            value={degree}
            onChange={onChange}
            name="degree"
          />
          <Label htmlFor="">Start Date</Label>
          <Input
            id={`{id}-startDate`}
            type="date"
            placeholder="1/1/1958"
            value={startDate}
            onChange={onChange}
            name="startDate"
          />
          <Label htmlFor="">End Date</Label>
          <Input
            id={`${id}-endDate`}
            type="date"
            placeholder="1/1/1962"
            value={endDate}
            onChange={onChange}
            name="endDate"
          />
          <Label htmlFor="">Location</Label>
          <Input
            id={`${id}-location`}
            type="text"
            placeholder="USA"
            value={location}
            onChange={onChange}
            name="location"
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

export default EducationDetails;
