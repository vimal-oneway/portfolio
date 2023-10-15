import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Navlinks } from "../utils/data";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="px-5 border-b-2 text-lg border-secondary md:fixed sticky top-0 pt-2.5 pb-1 w-full z-40 bg-primary md:flex md:justify-between md:items-center">
      <div className="hidden md:block">
        <div className="md:flex md:items-center container mx-auto hidden">
          <a href="#">
            <img
              src="/vimal.png"
              alt="logo"
              width={36}
              className="mr-3 rounded-full"
            />
          </a>
          {Navlinks.map(({ title, path }) => (
            <a
              href={path}
              className={`pt-3 pb-2.5 font-semibold hover:bg-accent transition-colors px-3`}
            >
              {title}
            </a>
          ))}
          <a
            href="mailto:contact@vimaldev.in"
            className={`flex gap-1 font-semibold pt-3 pb-2.5 px-3 hover:bg-accent transition-colors`}
          >
            {`Hire me`}
            <ArrowUpRight />
          </a>
        </div>
        <div className="md:flex md:gap-3 hidden">
          <a href="https://github.com/vimal-oneway">
            <Github />
          </a>
          <a href="mailto:contact@vimaldev.in">
            <Mail />
          </a>
          <a href="https://www.linkedin.com/in/vimal-raj-r-webie/">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="md:hidden  flex w-full justify-between items-center py-2">
        <div>
          <a href="/">
            <img
              src="/vimal.png"
              alt="logo"
              width={32}
              className="rounded-full"
            />
          </a>
        </div>
        <div data-open={navbarOpen} className="group z-50">
          <button
            className="flex items-center flex-col gap-2 font-semibold py-2 px-3 hover:bg-accent transition-colors relative"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="bg-secondary h-1 w-6 absolute top-0  group-data-[open=true]:rotate-45  transform group-data-[open=true]:translate-y-[4px] transition-all ease-in-out duration-300"></span>
            <span className="bg-secondary h-1 w-6 absolute top-2  group-data-[open=true]:w-0 transition-all ease-in-out duration-150"></span>
            <span className="bg-secondary h-1 w-6 absolute top-4  group-data-[open=true]:-rotate-45  transform group-data-[open=true]:-translate-y-[12px] transition-all ease-in-out duration-300"></span>
          </button>
        </div>
        {navbarOpen && (
          <>
            <div
              className="min-h-screen  min-w-screen w-full z-40 absolute left-0 top-0 bg-transparent"
              onClick={() => {
                setNavbarOpen(false);
              }}
            ></div>
            <div className="absolute right-0 top-[4.2rem] z-50  text-black w-52 opacity-100 transition-all duration-300 ease-in-out">
              <motion.div
                className="rounded-lg  flex justify-center flex-col w-full overflow-hidden bg-secondary"
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
              >
                {Navlinks.map(({ title, path }) => (
                  <a href={path} className={`pt-3 pb-2.5 font-semibold  px-3`}>
                    {title}
                  </a>
                ))}
                <a
                  href="mailto:contact@vimaldev.in"
                  className={`flex gap-1 font-semibold pt-3 pb-2.5 px-3`}
                >
                  {`Hire me`}
                  <ArrowUpRight />
                </a>
                <div className="flex gap-3 md:hidden pt-3 pb-2.5 px-3">
                  <a href="https://github.com/vimal-oneway">
                    <Github />
                  </a>
                  <a href="mailto:contact@vimaldev.in">
                    <Mail />
                  </a>
                  <a href="https://www.linkedin.com/in/vimal-raj-r-webie/">
                    <Linkedin />
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
