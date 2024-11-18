import { /*ReactElement,*/ ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div style={{ border: "1px solid tomato" }}>{children}</div>;
};
