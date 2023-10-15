import { ArrowUpRight } from "lucide-react";
import { Navlinks } from "../../utils/data";
import { useState } from "react";
export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="px-5 glassmorphism border-b-2 text-lg border-secondary">
      <div className="md:flex items-center container mx-auto hidden">
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
      <div className="md:hidden flex justify-between items-center py-2">
        <a href="#">
          <img
            src="/vimal.png"
            alt="logo"
            width={48}
            className="mr-3 rounded-full"
          />
        </a>
        <div className="relative">
          <div data-open={navbarOpen} className="group">
            <button
              className="flex items-center flex-col gap-2 font-semibold py-2 px-3 hover:bg-accent transition-colors relative"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="bg-secondary h-1 w-10 absolute top-0  group-data-[open=true]:rotate-45  transform group-data-[open=true]:translate-y-[8px] transition-all ease-in-out duration-300"></div>
              <div className="bg-secondary h-1 w-10 absolute top-3  group-data-[open=true]:w-0 transition-all ease-in-out duration-150"></div>
              <div className="bg-secondary h-1 w-10 absolute top-6  group-data-[open=true]:-rotate-45  transform group-data-[open=true]:-translate-y-[16px] transition-all ease-in-out duration-300"></div>
            </button>
          </div>
          {navbarOpen && (
            <div className="absolute right-0 top-12 flex justify-center flex-col bg-secondary text-black w-52 rounder-lg">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
