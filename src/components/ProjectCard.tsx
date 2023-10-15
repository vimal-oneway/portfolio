import { ArrowUpRight, Github } from "lucide-react";
import { Animate } from "../section/Animate";
import { ProjectCardProp } from "../section/Project";

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  techStack,
}: ProjectCardProp) => {
  return (
    <Animate>
      <div className="w-[80%] max-w-6xl mx-auto p-3 bg-accent m-3 lg:justify-between flex-col lg:flex-row gap-6 flex rounded-xl">
        <div className="w-full lg:w-1/2">
          <div className="md:hidden">
            {/* @ts-ignore */}
            <marquee direction="left">
              <div className="flex justify-start items-center gap-5">
                {techStack.map((tech_stack, i) => {
                  return (
                    <span key={i} className="font-semibold text-sm">
                      {tech_stack}
                    </span>
                  );
                })}
              </div>
              {/* @ts-ignore */}
            </marquee>
          </div>
          <a href={link}>
            <img
              src={image}
              alt={title}
              className="rounded-lg mt-1"
              height={"100"}
            />
          </a>
        </div>
        <div className="mt-1 lg:mt-0 w-full lg:w-1/2">
          <div className="py-2 px-2 hidden md:block">
            {/* @ts-ignore */}
            <marquee direction="left">
              {techStack.map((tech_stack, i) => {
                return (
                  <span
                    key={i}
                    className="text-lg mx-5 font-semibold capitalize"
                  >
                    {tech_stack}
                  </span>
                );
              })}
              {/* @ts-ignore */}
            </marquee>
          </div>
          <p className="md:text-4xl text-2xl font-bold">{title}</p>

          <p className="text-sm mt-1 md:mt-3">{description}</p>
          <div className="flex mt-3 gap-3 flex-col md:flex-row">
            <a
              href={link}
              className={`px-3 py-1 border-2 bg-secondary text-black border-secondary font-semibold md:text-lg flex gap-2 justify-center items-center lg:hover:bg-primary lg:hover:text-secondary rounded-lg  transition-all ease-in-out duration-500`}
            >
              View
              <ArrowUpRight />
            </a>
            <a
              href={github}
              // className={`px-3 py-1 border-2 bg-accent font-semibold md:text-lg flex gap-2 justify-center items-center rounded-lg`}
              className={`px-3 py-1 border-2 bg-primary text-secondary border-secondary font-semibold md:text-lg flex gap-2 justify-center items-center lg:hover:bg-secondary lg:hover:text-primary rounded-lg transition-all ease-in-out duration-500`}
            >
              Github
              <Github />
            </a>
          </div>
        </div>
      </div>
    </Animate>
  );
};
