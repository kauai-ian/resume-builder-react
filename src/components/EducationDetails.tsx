import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { Buttons } from "./helpers/button";
import { handleRemove, handleSave } from "./helpers/handlers";

export const EducationDetails: React.FC<{
  onChange: ChangeEventHandler<HTMLInputElement>;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}> = ({
  onChange,
  school,
  degree,
  startDate,
  endDate,
  location,
  id,
}) => {
  return (
    
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
          <Buttons onSave={handleSave} onRemove={handleRemove} />
        </FormStyled>
      </FormContainer>
    
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
