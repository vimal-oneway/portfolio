import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SkillCard: FC<Props> = ({ children }) => {
  return (
    <div className="relative w-[48px] h-[48px]">
      <div className="w-full h-full bg-accent border-2 flex justify-center items-center p-1.5 z-20 absolute">
        {children}
      </div>
      <div className="w-full h-full top-[4px] left-[4px] bg-secondary absolute z-10" />
    </div>
  );
};
