import { useEffect, useState } from "react";
import { Animate } from "./Animate";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
// const textTransition = {
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//   hidden: { opacity: 0, x: 10 },
// };

type Output = {
  type: string;
  value: string | JSX.Element;
};

const asciiArt = `
__         __    _     __      __      ___     __
\\ \\       / /   (_)   |  \\    /  |    /   \\   |  |
 \\ \\     / /     _    |   \\  /   |   /  _  \\  |  |
  \\ \\   / /     | |   |    \\/    |  |  |_|  | |  |
   \\ \\ / /      | |   |  |\\__/|  |  |   _   | |  |____
    \\_\\ /      |___|  |__|    |__|  |__| |__| |_______|
`;

export const Contact = () => {
  const data: Output[] = [
    // { type: "input", value: "Contact Me: Reach Out and Let's Connect!" },
    { type: "input", value: "Email" },
    {
      type: "output",
      value: (
        <a href="mailto:contact@vimaldev.in" className="flex gap-1">
          <span className="hover:text-blue-500 hover:underline text-sm md:text-base">
            contact@vimaldev.in
          </span>
        </a>
      ),
    },
    { type: "input", value: "LinkedIn" },
    {
      type: "output",
      value: (
        <a
          href="https://www.linkedin.com/in/vimal-raj-r-webie/"
          className="flex gap-1"
        >
          <span className="hover:text-blue-500 hover:underline text-sm md:text-base">
            www.linkedin.com/in/vimal-raj-r-webie/
          </span>
        </a>
      ),
    },
    { type: "input", value: "Github" },
    {
      type: "output",
      value: (
        <a href="https://github.com/vimal-oneway" className="flex gap-1">
          <span className="hover:text-blue-500 hover:underline text-sm md:text-base">
            github.com/vimal-oneway
          </span>
        </a>
      ),
    },
  ];

  const [output, setOutput] = useState<Output[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log("key", e.key);

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      let newIndex;

      if (e.key === "ArrowLeft") {
        newIndex = activeIndex == 1 ? data.length - 1 : activeIndex - 2;
      } else {
        newIndex = activeIndex == data.length - 1 ? 1 : activeIndex + 2;
      }

      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="mt-32 mb-5">
      <div>
        <Animate>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-center">
              <span className="text-secondary">Contact</span> Me
            </h3>
            <p className="text-lg md:text-2xl text-center font-semibold">
              Reach Out and{" "}
              <span className="text-secondary">Let's Connect!</span>
            </p>
          </div>
        </Animate>
        <Animate>
          <div
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="w-[80%] max-w-6xl  focus:outline-none mx-auto border-4 mt-4 border-accent m-3 gap-6 rounded-xl"
          >
            <div className="w-full bg-accent h-8 px-3 flex relative">
              <div className="flex justify-start items-center gap-2 absolute translate-y-1/2">
                <div className="bg-[#FF3B30] h-3 w-3 rounded-full"></div>
                <div className="bg-[#FFCC00] h-3 w-3 rounded-full"></div>
                <div className="bg-[#4CD964] h-3 w-3 rounded-full"></div>
              </div>
              <div className="justify-center items-center w-full hidden md:flex">
                <h4 className="text-center">
                  Get in
                  <span className="text-secondary font-bold"> Touch</span> via
                  My <span className="text-secondary font-bold"> Terminal</span>{" "}
                  -- use
                </h4>
                <ChevronLeft />
                <ChevronRight />
                <h4>{`   keys to navigate`}</h4>
              </div>
            </div>
            <div className="mt-1 lg:mt-0 w-full px-4 py-6 max-h-[450px]">
              <pre className="text-[6px] md:text-base">{asciiArt.trim()}</pre>

              <div className="mt-8">
                <div className="flex ">
                  <p className="text-secondary font-bold text-sm">vimal:~$ </p>
                  <div className="flex gap-1.5 md:gap-3  ml-1">
                    {data.map(({ type, value }, i) => {
                      return (
                        type === "input" && (
                          <button
                            className={`underline decoration-secondary focus:outline-0 focus:border-none font-semibold text-[.8rem] ${
                              i + 1 == activeIndex && "bg-accent text-secondary"
                            } `}
                            onClick={() => {
                              setOutput([...output, data[i + 1]]);
                              setActiveIndex(i + 1);
                            }}
                          >
                            <p> {value}</p>
                          </button>
                        )
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-1 mt-2.5">
                  <ChevronRight className="text-gray-300 max-w-[18px] w-full" />
                  {data[activeIndex].value}
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};
//  <div className="flex">
//     <h4>Mail me </h4>
//     <Button>Mail me </Button>
//   </div>
//   <div className="">
//   </div>
// <div>
//   {/* {output.map(({ type, value }, i) => {
//         return ( */}
//   <div>
//     <p>
//       {/* <span className="text-secondary font-bold">{`${
//             data[activeIndex].type == "input" ? "$ " : ""
//           }`}</span> */}
//       {data[activeIndex].value}
//     </p>
//   </div>
//   {/* ); */}
//   {/* })} */}
// </div>;
