import { SkillsContainer } from "../components/UI/SkillsContainer";

export const Skills = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center w-full border-b-2">
      <div className="">
        <div className="flex items-center gap-2">
          <h1 className="text-5xl mt-1 font-extrabold md:text-5xl">Skills</h1>
          <p className="text-3xl">🤹</p>
        </div>
        <p className="mt-4 text-center text-sm">Can you find me 🔍️?</p>
      </div>
      <div className="mt-5">
        <SkillsContainer />
      </div>
    </section>
  );
};
