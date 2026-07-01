interface Props {
  title: string;
  children: React.ReactNode;
}

const InfoBox = ({ title, children }: Props) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#EAE4D5]
        bg-white
        p-6
        shadow-sm
        "
    >
      <h3 className="font-semibold text-xl">{title}</h3>

      <div className="mt-3">{children}</div>
    </div>
  );
};

export default InfoBox;
