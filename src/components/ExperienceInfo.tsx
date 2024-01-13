import React from "react";

export type ExperienceDataProps = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
};

export const ExperienceInfo: React.FC<ExperienceDataProps> =({
  company,
    position,
    startDate,
    endDate,
    location,
    description,
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
        <p>{company}</p>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}