import { Navbar } from "../components/UI/Navbar";
import { Hero } from "../section/Hero";
import { Skills } from "../section/Skills";

export const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <div className="h-screen flex justify-center items-center ">
        <p className="border-2 px-3 py-2">This page under developement 🚧🚨</p>
      </div>
    </>
  );
};
