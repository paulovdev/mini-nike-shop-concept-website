import { motion } from "framer-motion";

const textSlideUpAnimation = {
  initial: {
    y: "0%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.015,
    },
  },
  hover: {
    y: "-100%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.015,
    },
  },
};
const Text = ({ text, spanClass }) => (
  <span
    className={`text-t text-[12px] font-medium font-azeret uppercase ${spanClass}`}
  >
    {text}
  </span>
);

const TextSlide = ({ text, customClass, spanClass, customFontSize }) => {
  return (
    <div
      className={`h-[18px] overflow-hidden cursor-default select-none ${customFontSize}`}
    >
      <motion.div
        className={`relative size-full flex flex-col ${customClass}`}
        variants={textSlideUpAnimation}
        initial="initial"
        whileHover="hover"
      >
        <Text text={text} spanClass={spanClass} />
        <Text text={text} spanClass={spanClass} />
      </motion.div>
    </div>
  );
};

export default TextSlide;
