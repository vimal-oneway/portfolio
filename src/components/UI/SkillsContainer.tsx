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
import { Animate } from "../../section/Animate";

export const SkillsContainer = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="flex h-full items-center justify-center">
        <Animate>
          <SkillCard>
            <MongoDbIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate>
          <SkillCard>
            <JavascriptIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <TypescriptIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <NodejsIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate>
          <SkillCard>
            <FigmaIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <HtmlIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            {/* <LinuxIcon /> */}
            <img src="/vimal.png" className="rounded-full" alt="My-photo" />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <CssIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <TailwindcssIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate>
          <SkillCard>
            <ExpressjsIcon />
          </SkillCard>
        </Animate>

        <Animate>
          <SkillCard>
            <ReactIcon />
          </SkillCard>
        </Animate>
        <Animate>
          <SkillCard>
            <ReduxIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex h-full items-center justify-center">
        <Animate>
          <SkillCard>
            <BashIcon />
          </SkillCard>
        </Animate>
      </div>
    </div>
  );
};
