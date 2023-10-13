import { Navbar } from "../components/UI/Navbar";
import { Hero } from "../section/Hero";
import { Project } from "../section/Project";
import { Skills } from "../section/Skills";

export const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
    </>
  );
};
