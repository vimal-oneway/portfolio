import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SkillCard: FC<Props> = ({ children }) => {
  return (
    <div className="relative w-[32px] h-[32px] md:w-[48px] md:h-[48px] group">
      <div className="w-full h-full bg-accent border-2 flex justify-center items-center p-1 md:p-1.5 z-20 absolute">
        {children}
      </div>
      <div className="w-full h-full top-[4px] left-[4px] bg-[#fff] absolute z-10" />
    </div>
  );
};
