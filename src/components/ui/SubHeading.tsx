interface Props {
  children: React.ReactNode;
}

const SubHeading = ({ children }: Props) => {
  return <h2 className="mt-10 mb-5 text-3xl font-semibold">{children}</h2>;
};

export default SubHeading;
