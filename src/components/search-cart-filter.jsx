import { ListFilter, Search, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { slideUpWExitAnimation } from "@/anim/anim";
import Filters from "./filters";
import { useState } from "react";
import TextSlide from "./text-slide";

const SearchCartFilter = ({ setCartModal, cart }) => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 select-none">
      <div className="flex items-center gap-2">
        <Search size={18} className="text-t " />
        <p className="text-t text-[12px] font-medium font-azeret uppercase">
          Search
        </p>
      </div>

      <div className="">
        <div
          className="flex items-center gap-2 cursor-default"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <ListFilter size={18} className="text-t " />
          <TextSlide text="FILTERS" />
        </div>
        <AnimatePresence mode="wait">
          {openFilter && <Filters setOpenFilter={setOpenFilter} />}
        </AnimatePresence>
      </div>

      <div
        className="h-fit overflow-hidden"
        onClick={() => {
          setCartModal(true);
        }}
      >
        <motion.div
          className="flex items-center gap-2"
          key={cart}
          variants={slideUpWExitAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p className="text-t text-[12px] font-medium font-azeret uppercase">
            {cart.length}
          </p>
          <ShoppingBag size={18} className="text-t " />
        </motion.div>
      </div>
    </div>
  );
};

export default SearchCartFilter;
