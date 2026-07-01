interface Props {
  children: React.ReactNode;
}

const Paragraph = ({ children }: Props) => {
  return <p className="mt-5 text-lg leading-8 text-neutral-700">{children}</p>;
};

export default Paragraph;
