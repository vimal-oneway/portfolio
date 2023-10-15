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
} from "../Icon";
import { Animate } from "../section/Animate";

const classes = `w-full h-full text-white bg-cover bg-center flex justify-center items-end rounded-md`;

export const SkillsContainer = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="flex h-full items-center justify-center">
        <Animate className={classes}>
          <SkillCard>
            <MongoDbIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate className={classes}>
          <SkillCard>
            <JavascriptIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <TypescriptIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <NodejsIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate className={classes}>
          <SkillCard>
            <FigmaIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <HtmlIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            {/* <LinuxIcon /> */}
            <img src="/vimal.png" className="rounded-full" alt="My-photo" />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <CssIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <TailwindcssIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex flex-col gap-[30px] h-full items-center justify-center">
        <Animate className={classes}>
          <SkillCard>
            <ExpressjsIcon />
          </SkillCard>
        </Animate>

        <Animate className={classes}>
          <SkillCard>
            <ReactIcon />
          </SkillCard>
        </Animate>
        <Animate className={classes}>
          <SkillCard>
            <ReduxIcon />
          </SkillCard>
        </Animate>
      </div>

      <div className="flex h-full items-center justify-center">
        <Animate className={classes}>
          <SkillCard>
            <BashIcon />
          </SkillCard>
        </Animate>
      </div>
    </div>
  );
};
