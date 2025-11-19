import { motion } from "framer-motion";

const FloatingShape = ({ src, top, left, width, height, rotateSpeed }) => {
  return (
   <motion.img
  src={src}
  alt="Floating Shape"
  style={{
    position: "absolute",
    top,
    left,
    width,
    height,
    zIndex: 10,
    opacity: 0.25,
    pointerEvents: "none",
  }}
  animate={{
    rotate: [0, 360],
    x: [0, 2, -2, 3, -1, 0], 
    y: [0, -4, 2, -6, 3, 0], 
    scale: [1, 1.01, 0.99, 1.01, 1],
  }}
  transition={{
    rotate: {
      repeat: Infinity,
      ease: "linear",
      duration: rotateSpeed || 25,
    },
    x: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 12,
    },
    y: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 15,
    },
    scale: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 10,
    },
  }}
/>

  );
};

export default FloatingShape;
