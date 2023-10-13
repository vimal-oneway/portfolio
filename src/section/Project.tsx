import { ProjectCard } from "../components/UI/ProjectCard";
import { Animate } from "./Animate";
export type ProjectCardProp = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  github: string;
};
const projects: ProjectCardProp[] = [
  {
    title: "Cloud kitchen",
    description: `A web app for ordering food from cloud kitchens. Users can log in, choose dishes, add them to their cart, and easily check out. It's all about convenient online food ordering.`,
    image: "./ck.webp",
    techStack: [
      "Typescript",
      "React",
      "Tailwind css",
      "Express",
      "Razorpay",
      "Node",
      "MongoDB",
    ],
    link: "https://ck.vimaldev.in/",
    github: "https://github.com/vimal-oneway/CK_CloudKitchen",
  },
  {
    title: "Caliber fitnesss",
    description:
      "Real-world project showcasing modern fitness solutions. Built with Next.js, Tailwind CSS, and Dasiy UI for a seamless user experience. Explore our services, trainers, and success stories. Unlock your fitness potential.",
    image: "./caliber.webp",
    techStack: ["Javascript", "Nextjs", "Tailwind css", "Daisy UI"],
    link: "https://www.caliberfitness.co.in/",
    github: "https://github.com/vimal-oneway/caliber",
  },
];

export const Project = () => {
  return (
    <section
      className="min-h-[60vh] lg:min-h-[80vh] h-full mx-auto w-full flex justify-center items-center"
      id="projects"
    >
      <div className="w-full h-full">
        <Animate>
          <p
            className="font-bold text-3xl
         md:text-6xl text-center text-secondary"
          >
            Projects
          </p>
          <p className=" font-bold text-center text-xl md:text-2xl mt-1 md:mt-3">
            Code, Create, Conquer, Repeat.
          </p>
        </Animate>
        <div className="mt-12 md:mt-24 flex flex-col gap-5">
          {projects.map((project, i) => {
            return <ProjectCard key={i} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
