import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return <section className="py-10 md:py-16">{children}</section>;
};

export default Section;
