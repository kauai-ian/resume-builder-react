import React from "react";
// import { EducationForm } from "./EducationForm";

export type EducationInfoProps = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
}

export const EducationInfo: React.FC<EducationInfoProps> = ({ school, degree, startDate, endDate, location }) => {
  
  return (
    <div>
      
      
      <div>
        <p>
          {startDate}
          {startDate && endDate && <span> - </span>}
          {endDate}
        </p>
        <p>{location}</p>
      </div>

      <div>
        <p>{school}</p>
        <p>{degree}</p>
      </div>
    </div>
  );
};
