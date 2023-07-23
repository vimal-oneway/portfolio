import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/UI/Button";

export const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center border-b-2">
      <div>
        <div className="font-lg">
          <p>Hey!, I am 👋</p>
        </div>
        <h1 className="text-8xl mt-1 font-extrabold md:text-5xl">
          VIMAL RAJ R
        </h1>
        <p className="text-gray-200 mt-1.5 text-2xl font-bold text-center">
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
