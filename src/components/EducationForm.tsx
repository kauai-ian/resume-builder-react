// import { ChangeEventHandler } from "react";
import { FormContainer, FormStyled, Label, Input } from "./helpers/form-style";
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
  // onChange: ChangeEventHandler<HTMLInputElement>;
  onSave: (data: EducationData) => void;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}> = ({ onSave, school, degree, startDate, endDate, location, id }) => {
  const handleSave = () => {
    const formData: EducationData = {
      school, degree, startDate, endDate, location, id,
    }
    onSave(formData)
    console.log("Save");
  };
  
const handleRemove = () => {
    
    console.log("Remove");
  };


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
          // onChange={onChange}
          name="school"
        />
        <Label htmlFor="">Degree</Label>
        <Input
          id={`${id}-degree`}
          type="text"
          placeholder="Music"
          value={degree}
          // onChange={onChange}
          name="degree"
        />
        <Label htmlFor="">Start Date</Label>
        <Input
          id={`{id}-startDate`}
          type="date"
          placeholder="1/1/1958"
          value={startDate}
          // onChange={onChange}
          name="startDate"
        />
        <Label htmlFor="">End Date</Label>
        <Input
          id={`${id}-endDate`}
          type="date"
          placeholder="1/1/1962"
          value={endDate}
          // onChange={onChange}
          name="endDate"
        />
        <Label htmlFor="">Location</Label>
        <Input
          id={`${id}-location`}
          type="text"
          placeholder="USA"
          value={location}
          // onChange={onChange}
          name="location"
        />
        <ButtonForm onSave={handleSave} onRemove={handleRemove} />
      </FormStyled>
    </FormContainer>
  );
};
