import React from "react";
import styled from "styled-components";


export type ExperienceDataProps = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  id: string;
};

export const ExperienceInfo: React.FC<ExperienceDataProps> = ({
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) => {
  return (
    <Container>
      <LeftDiv>
        <p>
          {startDate}
          {startDate && endDate && <span> - </span>}
          {endDate}
        </p>
        <p>{location}</p>
      </LeftDiv>

      <RightDiv>
        <p>{company}</p>
        <p>{position}</p>
        <p>{description}</p>
      </RightDiv>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.div`
  flex: 1;
`;

const RightDiv = styled.div`
  flex: 2;
  max-width: 80%;
  text-align: left;
`;
