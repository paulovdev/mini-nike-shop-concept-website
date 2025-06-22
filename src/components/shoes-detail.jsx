import { ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { slideUpWExitAnimation } from "@/anim/anim";

const ShoesDetail = ({
  selectedShoes,
  cart,
  setCart,
  filteredData,
  selectedFilter,
}) => {
  if (!filteredData || !filteredData[selectedShoes]) return null;

  const selected = filteredData[selectedShoes];
  const existingIndex = cart.findIndex((item) => item.id === selected.id);

  const handleAddToCart = () => {
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...selected, quantity: 1 }]);
    }
  };

  return (
    <div className="size-full p-10 flex-[2] flex flex-col bg-s max-ds:p-5 z-10">
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

            <div className="mb-1 h-[26px] overflow-hidden">
              <motion.p
                className="mb-8 text-[12px] text-t/75 font-azeret uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
              >
                {selected.description}
              </motion.p>
            </div>

            <div className="mb-8 h-[20px] overflow-hidden">
              <motion.p
                className="mb-8 text-[18px] text-t/75 font-azeret uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
              >
                {selected.price}
              </motion.p>
            </div>

            <div className="h-[40px] overflow-hidden">
              <motion.div
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.05}
                className="w-full flex items-center gap-4 select-none"
              >
                <div
                  className={`w-fit h-fit px-6 py-2 bg-f border flex items-center justify-center gap-2 group hover:bg-p hover:border-bb transition-all duration-200 ${
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
        </div>
      </AnimatePresence>

      <div className="h-full flex items-end justify-start select-none max-lg:h-[100px]">
        <AnimatePresence mode="wait">
          <div
            className=""
            key={`${selectedFilter.category}-${selectedFilter.subcategory}-${selectedShoes}`}
          >
            <div className="w-fit h-fit overflow-hidden">
              <div className="flex items-center">
                <p className="text-t/75 text-[16px] font-azeret uppercase">
                  {selected.id < 10 ? "0" : ""}
                </p>
                <motion.p
                  className="text-t/75 text-[16px] font-azeret uppercase"
                  variants={slideUpWExitAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={0}
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
            <span className="text-t text-[16px] font-azeret uppercase">/</span>
            <div className="h-fit overflow-hidden">
              <motion.p
                className="text-t text-[16px] font-azeret uppercase"
                variants={slideUpWExitAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.1}
              >
                {selectedFilter.category}
              </motion.p>
            </div>
            <span className="text-t text-[16px] font-azeret uppercase">/</span>
            <div className="h-fit overflow-hidden">
              <motion.p
                className="text-t text-[16px] font-azeret uppercase"
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
    </div>
  );
};

export default ShoesDetail;
