import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/UI/Button";

export const Hero = () => {
  return (
    <section className="h-[60vh] lg:h-screen flex justify-center items-center">
      <div>
        <div className="font-lg">
          <p>Hey!, I am 👋</p>
        </div>
        <h1 className="text-5xl md:text-8xl mt-1 font-extrabold ">
          VIMAL <span className="text-secondary">RAJ R</span>
        </h1>
        <p className="text-gray-200 mt-1.5 text-2xl font-bold text-center text-secondarys">
          A Full stack developer
        </p>

        <div className="mt-3 flex justify-center gap-3">
          <Button>Resume 📄</Button>
          <Button>
            <div className="flex gap-2 items-center">
              <p>Hire me</p>
              <ArrowUpRight />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
