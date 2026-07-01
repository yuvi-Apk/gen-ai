interface Props {
  children: React.ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <span
      className="
        inline-flex
        rounded-full
        bg-[#EAE4D5]
        px-4
        py-2
        text-sm
        font-medium
        "
    >
      {children}
    </span>
  );
};

export default Badge;
