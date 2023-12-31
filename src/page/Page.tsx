import { Navbar } from "../components/Navbar";
import { Contact } from "../section/Contact";
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
      <Contact />
    </>
  );
};
