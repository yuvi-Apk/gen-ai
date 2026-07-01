import type{ ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      {children}
    </div>
  );
};

export default Container;