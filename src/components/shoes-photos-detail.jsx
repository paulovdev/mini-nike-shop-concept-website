import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { clipImageAnimation } from "@/anim/anim";

const ShoesPhotosDetail = ({ filteredData, selectedShoes, selectedFilter }) => {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="absolute z-10 mix-blend-exclusion pointer-events-none">
        <h1 className="text-t text-[64px] font-bold italic">
          NIKE <span className="text-[16px] align-top">®</span>
        </h1>
      </div>

      <AnimatePresence mode="wait">
        <div
          className="size-full flex flex-col overflow-y-scroll bg-f select-none 
          max-lg:flex-row max-lg:overflow-y-auto
          max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory"
          key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}`}
        >
          {filteredData[selectedShoes].imgDetails.map((item, i) => (
            <motion.figure
              className="size-full max-lg:flex-shrink-0 max-lg:snap-start"
              variants={clipImageAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.8}
            >
              <Image
                src={item}
                width={1000}
                height={1000}
                alt=""
                className="size-full object-cover pointer-events-none"
                key={i}
              />
            </motion.figure>
          ))}
        </div>
      </AnimatePresence>
      <div className="fixed bottom-5 flex items-center gap-2  mix-blend-exclusion max-lg:hidden">
        <span className="text-t text-[12px] font-azeret uppercase">SCROLL</span>
        <ArrowDown size={16} className="text-t animate-bounce" />
      </div>
    </div>
  );
};

export default ShoesPhotosDetail;
