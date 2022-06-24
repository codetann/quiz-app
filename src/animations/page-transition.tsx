import { motion } from "framer-motion";

enum VARIANTS {
  INITIAL = "initial",
  IN = "in",
  OUT = "out",
}

const variants = {
  initial: {
    opacity: 0,
    y: "10vw",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "10vw",
  },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={VARIANTS.INITIAL}
      animate={VARIANTS.IN}
      exit={VARIANTS.OUT}
      variants={variants}
      transition={{ duration: 0.3, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export { PageTransition };
