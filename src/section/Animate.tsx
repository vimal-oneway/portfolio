import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 75 },
};

type AnimateProps = {
  children: React.ReactNode;
};

export const Animate = ({ children }: AnimateProps) => {
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const fun = async () => {
        await control.start("visible");
      };
      fun();
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className={`w-full h-full text-white bg-cover bg-center flex justify-center items-end rounded-md`}
    >
      {children}
    </motion.div>
  );
};
