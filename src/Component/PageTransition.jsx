import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function PageTransition({ children }) {
  // portrait phones → vertical wipe instead of horizontal
  const vertical = useMediaQuery({ maxWidth: 639 });

  const overlayVariants = vertical
    ? {
        initial: { y: "100%" },
        animate: {
          y: "-100%",
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
      }
    : {
        initial: { x: "-100%" },
        animate: {
          x: "100%",
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
      };

  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px) rotateX(-5deg)" }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px) rotateX(0deg)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        filter: "blur(6px) rotateX(5deg)",
        transition: { duration: 0.4, ease: [0.55, 0, 0.55, 0.2] },
      }}
    >

      {/* page content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
