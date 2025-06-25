import { ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideUpAnimation,
  slideUpNoOpacityAnimation,
  slideUpWExitAnimation,
} from "@/anim/anim";
import { useState } from "react";

const ShoesDetail = ({
  selectedShoes,
  cart,
  setCart,
  filteredData,
  selectedFilter,
}) => {
  if (!filteredData || !filteredData[selectedShoes]) return null;
  const [selectedSize, setSelectedSize] = useState({});

  const selected = filteredData[selectedShoes];
  const existingIndex = cart.findIndex((item) => item.id === selected.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { ...selected, quantity: 1, size: selectedSize[selected.id] },
      ]);
    }
  };

  const sizes = [
    "M 7 / W 8.5",
    "M 7.5 / W 9",
    "M 8 / W 9.5",
    "M 8.5 / W 10",
    "M 9 / W 10.5",
    "M 9.5 / W 11",
    "M 10 / W 11.5",
    "M 10.5 / W 12",
  ];

  return (
    <div className="size-full p-10 flex-[2] flex flex-col bg-s max-ds:p-5 z-10">
      <div className="mb-4 flex items-start justify-start select-none">
        <AnimatePresence mode="wait">
          <div
            className=""
            key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}`}
          >
            <div className="w-fit h-fit overflow-hidden">
              <div className="flex items-center">
                <p className="text-t/75 text-[10px] font-azeret uppercase tracking-[2px]">
                  {selected.id < 10 ? "0" : ""}
                </p>
                <motion.p
                  className="text-t/75 text-[10px] font-azeret uppercase tracking-[2px]"
                  variants={slideUpWExitAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={0.05}
                >
                  {selected.id}
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <div
            className="h-full flex items-end "
            key={selectedFilter.subcategory}
          >
            <span className="text-t text-[10px] font-azeret uppercase tracking-[2px]">
              /
            </span>
            <div className="h-fit overflow-hidden">
              <motion.p
                className="text-t text-[10px] font-azeret uppercase tracking-[2px]"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.1}
              >
                {selectedFilter.category}
              </motion.p>
            </div>
            <span className="text-t text-[10px] font-azeret uppercase tracking-[2px]">
              /
            </span>
            <div className="h-fit overflow-hidden">
              <motion.p
                className="text-t text-[10px] font-azeret uppercase tracking-[2px]"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.25}
              >
                {selectedFilter.subcategory}
              </motion.p>
            </div>
          </div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <div
          key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}`}
        >
          <div className="flex flex-col items-start justify-start">
            <div className="mb-1 h-[50px] overflow-hidden">
              <motion.h2
                className="text-[36px] text-t font-medium uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
              >
                <span className="font-bold italic">NIKE® </span>
                {selected.title}
              </motion.h2>
            </div>

            <div className="mb-1 h-fit overflow-hidden">
              <motion.p
                className="text-[12px] text-t/75 font-azeret uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
              >
                {selected.description}
              </motion.p>
            </div>

            <div className="mb-8 h-[24px] overflow-hidden">
              <motion.p
                className="mb-8 text-[22px] text-t/75 font-medium font-azeret uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
              >
                {selected.price}
              </motion.p>
            </div>

            <div className="my-4 w-full h-0.5 bg-bb"></div>
           <div className="mb-8 h-fit overflow-hidden">
            <motion.p
              className="text-[12px] text-t/75 font-azeret uppercase"
              variants={slideUpWExitAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.05}
            >
             Select size
            </motion.p>
          </div>

            <div className="mb-8 w-full grid grid-cols-4 gap-2 max-ds:grid-cols-2 max-lg:grid-cols-3">
              {sizes.map((size, i) => {
                const isActive = selectedSize[selected.id] === size;
                return (
                  <div
                    className="h-fit overflow-hidden cursor-default select-none"
                    onClick={() => {
                      setSelectedSize((prev) => ({
                        ...prev,
                        [selected.id]: size,
                      }));
                    }}
                  >
                    <motion.div
                      key={i}
                      className={`border border-bb w-full h-fit py-3 flex items-center justify-center ${
                        isActive ? "bg-f" : "bg-s"
                      } transition-all duration-200 `}
                      variants={slideUpNoOpacityAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={i}
                    >
                      <p
                        className={`text-[12px] font-medium font-azeret uppercase  ${
                          isActive ? "text-p" : "text-f"
                        }  transition-all duration-200`}
                      >
                        {size}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-[60px] overflow-hidden">
              <motion.div
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
                className="w-full flex items-center gap-4 select-none"
              >
                <div
                  className={`w-full h-[60px] px-6 py-2 bg-f border flex items-center justify-center gap-2 group hover:bg-p hover:border-bb transition-all duration-200 ${
                    existingIndex !== -1
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart
                    size={16}
                    className="text-p group-hover:text-f transition-all duration-200"
                  />
                  <p className="text-p text-[12px] font-medium font-azeret uppercase group-hover:text-f transition-all duration-200">
                    {existingIndex !== -1 ? "On the cart" : "Add to Cart"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="my-4 w-full h-0.5 bg-bb"></div>
          <div className="mb-1 h-fit overflow-hidden">
            <motion.p
              className="text-[12px] text-t/75 font-azeret uppercase"
              variants={slideUpWExitAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.05}
            >
              COLOR: BLACK
            </motion.p>
          </div>
          <div className="mb-1 h-fit overflow-hidden">
            <motion.p
              className="text-[12px] text-t/75 font-azeret uppercase"
              variants={slideUpWExitAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.05}
            >
              SIZE: 12EU
            </motion.p>
          </div>
          <div className="mb-1 h-fit overflow-hidden">
            <motion.p
              className="text-[12px] text-t/75 font-azeret uppercase"
              variants={slideUpWExitAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.05}
            >
              STYLE: FJ2568-002
            </motion.p>
          </div>
          <div className="mb-1 h-fit overflow-hidden">
            <motion.p
              className="text-[12px] text-t/75 font-azeret uppercase"
              variants={slideUpWExitAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.05}
            >
              Recommended for: Everyday
            </motion.p>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ShoesDetail;
