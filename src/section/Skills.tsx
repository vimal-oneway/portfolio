import { SkillsContainer } from "../components/UI/SkillsContainer";

export const Skills = () => {
  return (
    <section
      className="h-[60vh] lg:h-screen flex flex-col justify-center items-center w-full "
      id="skills"
    >
      {/* <div className=""> */}
      {/* <div className="flex items-center gap-2">
          <h1 className=" mt-1 font-extrabold md:text-5xl text-center">
            Skills
          </h1>
        </div> */}
      <div className="">
        <span className="text-secondary font-bold text-6xl">No stack</span>
        <p className="text-center text-3xl md:text-2xl">for Full Stack</p>
      </div>
      {/* </div> */}
      <div className="mt-12 md:mt-24">
        <SkillsContainer />
      </div>
    </section>
  );
};
