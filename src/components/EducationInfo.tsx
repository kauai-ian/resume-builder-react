import React from "react";
import { EducationData } from "./EducationForm";


export type EducationData = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
};

export const EducationInfo: React.FC<EducationData> = ({
  school,
  degree,
  location,
  startDate,
  endDate,
}) => {
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
