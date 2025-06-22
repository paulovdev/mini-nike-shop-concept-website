import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clipAnimation } from "@/anim/anim";

const MiniCaroussel = ({
  selectedShoes,
  setSelectedShoes,
  filteredData,
  selectedFilter,
}) => {
  if (!filteredData || !filteredData[selectedShoes]) return null;

  return (
    <>
      <motion.div className="size-full flex-[1.25] p-10 border-b border-bb flex flex-col items-center justify-center backdrop-blur-md max-ds:p-5 max-lg:py-25">
        <div className="w-full flex items-center justify-center  overflow-hidden">
          <MdOutlineKeyboardArrowLeft
            size={38}
            className={`absolute left-8 max-ds:left-5 ${
              selectedShoes === 0 ? "text-t/25" : "text-t/75 hover:text-t/100"
            } transition-all duration-200`}
            onClick={() => {
              if (selectedShoes > 0) setSelectedShoes(selectedShoes - 1);
            }}
          />

          <AnimatePresence mode="wait">
            <div
              className="flex items-center justify-center"
              key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}`}
            >
              <motion.figure
                className="w-[250px] h-[150px] select-none bg-transparent z-20"
                variants={clipAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Image
                  src={filteredData[selectedShoes].img}
                  width={500}
                  height={590}
                  alt=""
                  className="object-cover  pointer-events-none"
                />
              </motion.figure>
              <div className="absolute right-1/3 w-[100px] h-[30px] bg-f blur-[125px] z-10"></div>
            </div>
          </AnimatePresence>
          <MdOutlineKeyboardArrowRight
            size={38}
            className={`absolute right-8 max-ds:right-5 ${
              selectedShoes === filteredData.length - 1
                ? "text-t/50"
                : "text-t/75 hover:text-t/100"
            } transition-all duration-200`}
            onClick={() => {
              if (selectedShoes < filteredData.length - 1)
                setSelectedShoes(selectedShoes + 1);
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default MiniCaroussel;
