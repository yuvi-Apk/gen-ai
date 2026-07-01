interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
      {children}
    </h1>
  );
};

export default Heading;
