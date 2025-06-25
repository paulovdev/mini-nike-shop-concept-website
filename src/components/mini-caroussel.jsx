import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Image from "next/image";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { clipAnimation } from "@/anim/anim";
import { useRef, useState } from "react";

const MiniCaroussel = ({
  selectedShoes,
  setSelectedShoes,
  filteredData,
  selectedFilter,
}) => {
  if (!filteredData || !filteredData[selectedShoes]) return null;

  const controls = useDragControls();
  const ref = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;

    const dir = newIndex - selectedShoes;
    setDirection(dir);
    setIsAnimating(true);
    setSelectedShoes(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (
      (offset < -150 || velocity < -100) &&
      selectedShoes < filteredData.length - 1
    ) {
      changeSlide(selectedShoes + 1);
    } else if ((offset > 150 || velocity > 100) && selectedShoes > 0) {
      changeSlide(selectedShoes - 1);
    }
  };

  const wrapperAnimation = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 150 : -150,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -150 : 150,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  return (
    <motion.div className="size-full flex-[1.25] p-10 border-b border-bb flex flex-col items-center justify-center backdrop-blur-md max-ds:p-5 max-lg:py-25">
      <div className="w-full flex items-center justify-center overflow-hidden">
        <MdOutlineKeyboardArrowLeft
          size={38}
          className={`absolute left-8 max-ds:left-5 ${
            selectedShoes === 0 ? "text-t/25" : "text-t/75 hover:text-t/100"
          } transition-all duration-200`}
          onClick={() => {
            if (selectedShoes > 0) {
              changeSlide(selectedShoes - 1);
            }
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            className="flex items-center justify-center"
            key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}-${direction}`}
            ref={ref}
            variants={wrapperAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
          >
            <motion.figure
              className="w-[250px] h-[150px] select-none z-20"
              variants={clipAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              drag="x"
              dragControls={controls}
              dragConstraints={ref}
              onDragEnd={handleDragEnd}
            >
              <Image
                src={filteredData[selectedShoes].img}
                width={500}
                height={590}
                alt=""
                className="object-cover pointer-events-none"
              />
            </motion.figure>
          </motion.div>
        </AnimatePresence>

        <MdOutlineKeyboardArrowRight
          size={38}
          className={`absolute right-8 max-ds:right-5 ${
            selectedShoes === filteredData.length - 1
              ? "text-t/50"
              : "text-t/75 hover:text-t/100"
          } transition-all duration-200`}
          onClick={() => {
            if (selectedShoes < filteredData.length - 1) {
              changeSlide(selectedShoes + 1);
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default MiniCaroussel;
