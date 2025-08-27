import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textColor?: string;
}

export const TextHighlight = ({ children, textColor }: Props) => (
  <span className={`${textColor} text-purplescale-50`}>{children}</span>
);
