import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
transform: rotate(0);
}

to {
transform: rotate(360deg);
`;

export const Input = styled.input`
  padding: 16px 8px;
  &:focus {
    animation: ${rotate} 1s alternate;
    border: 10px solid ${(props) => props.theme.primary};
  }
`;
