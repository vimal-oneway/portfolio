import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/UI/Button";
import { Animate } from "./Animate";
const textTransition = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
};

const nameTransition = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 50 },
};
export const Hero = () => {
  const downloadPDF = () => {
    const pdfPath = "/vimal-raj-resume.pdf"; // Update this with the actual path

    // Create a temporary anchor element
    const link = document.createElement("a");

    // Set the anchor's href attribute to the PDF file's path
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "vimal-raj-resume.pdf";

    // Programmatically click the anchor to trigger the download
    link.click();
  };

  return (
    <section className="h-[60vh] lg:h-screen flex justify-center items-center">
      <div>
        <Animate variants={textTransition}>
          <div className="font-lg">
            <p>Hey!, I am 👋</p>
          </div>
        </Animate>
        <Animate variants={nameTransition}>
          <h1 className="text-5xl md:text-8xl mt-1 font-extrabold ">
            VIMAL <span className="text-secondary">RAJ R</span>
          </h1>
        </Animate>
        <p className="text-gray-200 mt-1.5 text-2xl font-bold text-center text-secondarys">
          An <span className="text-secondary">Full stack</span> developer 👩‍💻
        </p>

        <div className="mt-3 flex justify-center gap-3">
          <Button onClick={downloadPDF}>Resume 📄</Button>
          <a
            href="mailto:contact@vimaldev.in"
            className={`px-3 py-1 border-2 bg-primary text-secondary border-secondary font-semibold md:text-lg flex gap-2 justify-center items-center hover:bg-secondary hover:text-primary rounded-lg transition-all ease-in-out duration-500`}
          >
            <p>Hire me</p>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};
