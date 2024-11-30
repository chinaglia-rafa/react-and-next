import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

/*export const StyledCard = styled.div`
  background: blue;
  color: white;
  padding: 16px;
`;*/

export const StyledCard = styled.div(() => ({
  backgroundColor: "blue",
  color: "white",
  padding: "16px",
}));

/*export const Title = styled.span<{ $color: string }>`
  font-size: 19px;
  font-weight: bold;
  color: ${(props) => props.$color};
`;*/

export const Title: FunctionComponent<{ $color: string; children: ReactNode }> =
  styled.span((props) => ({
    fontSize: 19,
    fontWeight: "bold",
    color: props.$color,
  }));
