import { SkillsContainer } from "../components/UI/SkillsContainer";
import { Animate } from "./Animate";

export const Skills = () => {
  return (
    <section
      className="min-h-[60vh] lg:min-h-[80vh]  h-full flex justify-center items-center w-full"
      id="skills"
    >
      <div className="w-full h-full">
        <Animate>
          <div>
            <p className="text-secondary font-bold text-6xl text-center">
              No stack
            </p>
            <p className="text-center text-3xl md:text-2xl">for Full Stack</p>
          </div>
        </Animate>
        <div className="mt-12 md:mt-24">
          <SkillsContainer />
        </div>
      </div>
    </section>
  );
};
