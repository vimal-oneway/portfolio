import { ArrowUpRight } from "lucide-react";
import { Navlinks } from "../../utils/data";
export const Navbar = () => {
  return (
    <div className="px-5 glassmorphism border-b-2 text-lg">
      <div className="flex items-center container mx-auto">
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
            className={`pt-3 pb-2.5 font-semibold hover:bg-secondary hover:text-primary transition-colors px-3`}
          >
            {title}
          </a>
        ))}
        <a
          href="mailto:contact@vimaldev.in"
          className={`flex gap-1 font-semibold pt-3 pb-2.5 px-3 hover:bg-secondary hover:text-primary transition-colors`}
        >
          {`Hire me`}
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};
