/* eslint-disable @typescript-eslint/no-unused-vars */
const MagicButton1 = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="inline-flex relative h-12 w-full animate-shimmer items-center justify-center rounded-md border border-green-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none  gap-2">
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton1;
