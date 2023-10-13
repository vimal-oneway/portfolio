import { useAnimation, motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 75 },
};

type AnimateProps = {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
};

export const Animate = ({ children, variants, className }: AnimateProps) => {
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
      variants={variants || boxVariant}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  );
};
