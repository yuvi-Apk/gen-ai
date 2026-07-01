interface Props {
  children: React.ReactNode;
}

const Quote = ({ children }: Props) => {
  return (
    <blockquote
      className="
        border-l-4
        border-[#B6B09F]
        bg-[#EAE4D5]
        p-6
        italic
        rounded-r-xl
        my-8
        "
    >
      {children}
    </blockquote>
  );
};

export default Quote;
