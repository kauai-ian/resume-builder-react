import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export const OutlinedButton = styled(Button)`
  background-color: transparent;
  color: #fff;
`;
