import { SkillCard } from "./SkillCard";
import {
  BashIcon,
  CssIcon,
  ExpressjsIcon,
  FigmaIcon,
  HtmlIcon,
  JavascriptIcon,
  MongoDbIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../../Icon";

export const SkillsContainer = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="flex h-full items-center justify-center">
        <SkillCard>
          <MongoDbIcon />
        </SkillCard>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <SkillCard>
          <JavascriptIcon />
        </SkillCard>
        <SkillCard>
          <TypescriptIcon />
        </SkillCard>
        <SkillCard>
          <NodejsIcon />
        </SkillCard>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <SkillCard>
          <FigmaIcon />
        </SkillCard>
        <SkillCard>
          <HtmlIcon />
        </SkillCard>
        <SkillCard>
          {/* <LinuxIcon /> */}
          <img src="/vimal.png" className="rounded-full" alt="My-photo" />
        </SkillCard>
        <SkillCard>
          <CssIcon />
        </SkillCard>
        <SkillCard>
          <TailwindcssIcon />
        </SkillCard>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <SkillCard>
          <ExpressjsIcon />
        </SkillCard>
        <SkillCard>
          <ReactIcon />
        </SkillCard>
        <SkillCard>
          <ReduxIcon />
        </SkillCard>
      </div>

      <div className="flex h-full items-center justify-center">
        <SkillCard>
          <BashIcon />
        </SkillCard>
      </div>
    </div>
  );
};
