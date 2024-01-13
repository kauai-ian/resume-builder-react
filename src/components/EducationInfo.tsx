import React from "react";
import styled from "styled-components";

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
        <p>{school}</p>
        <p>{degree}</p>
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

