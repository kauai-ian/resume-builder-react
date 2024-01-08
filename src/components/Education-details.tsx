import { ChangeEventHandler } from "react";
import styled from "styled-components";

//define object props
interface EducationDetailsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}

const EducationDetails = ({
  onChange,
  school,
  degree,
  startDate,
  endDate,
  location,
  id,
}: EducationDetailsProps) => {
  return (
    <FormContainer className="Education">
      <h3>Education</h3>
      <FormStyled>
        <Label htmlFor="">School</Label>
        <Input
          id={id}
          type="text"
          placeholder="School of Hard Rock"
          value={school}
          onChange={onChange}
          name="school"
        />
        <Label htmlFor="">Degree</Label>
        <Input
          id={id}
          type="text"
          placeholder="Music"
          value={degree}
          onChange={onChange}
          name="degree"
        />
        <Label htmlFor="">Start Date</Label>
        <Input
          id={id}
          type="text"
          placeholder="1/1/1958"
          value={startDate}
          onChange={onChange}
          name="start date"
        />
        <Label htmlFor="">End Date</Label>
        <Input
          id={id}
          type="text"
          placeholder="1/1/1962"
          value={endDate}
          onChange={onChange}
          name="end date"
        />
        <Label htmlFor="">Location</Label>
        <Input
          id={id}
          type="string"
          placeholder="USA"
          value={location}
          onChange={onChange}
          name="location"
        />
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

export default EducationDetails;
