import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cartAnimation, slideUpAnimation } from "@/anim/anim";
import TextSlide from "./text-slide";

const Cart = ({ setCartModal, cart, cartModal, setCart }) => {
  const getCartTotal = () => {
    return cart
      .reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", "").replace(",", "."));
        return acc + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const removeItem = (idToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== idToRemove);
    setCart(updatedCart);
  };

  return (
    <div
      className="fixed w-screen h-[100dvh] inset-0 flex items-center justify-between z-100"
      key={cartModal}
    >
      <div className="relative size-full flex-[1] max-ds:hidden"></div>
      <div className="relative size-full flex-[1.5] max-md:hidden"></div>

      <motion.div
        className="relative size-full flex-[1.5] bg-s z-50 select-none flex flex-col p-5 max-h-screen overflow-hidden max-lg:flex-[3]"
        variants={cartAnimation}
        initial="closed"
        animate={cartModal && "open"}
        exit="closed"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] text-t font-medium font-azeret uppercase">
            My Cart ({cart.length})
          </h2>
          <div
            className="flex items-center gap-2 group"
            onClick={() => setCartModal(false)}
          >
            <TextSlide text="CLOSE" />
            <X
              size={18}
              className="text-t transition-all duration-500 group-hover:rotate-45"
            />
          </div>
        </div>

        <div className="w-full flex-1 mt-8 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-t text-[12px] font-medium font-azeret uppercase size-full flex items-center justify-center">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item, i) => (
              <div
                key={`${cart}-${item.id}`}
                className="h-[100px] overflow-hidden"
              >
                <motion.div
                  custom={i}
                  variants={slideUpAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex items-center justify-between"
                >
                  <div className="flex-[4] flex items-center gap-6">
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt={item.title}
                      className="w-[100px] h-[100px] object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="mb-1 text-t/50 text-[8px] font-azeret uppercase tracking-[1.5px]">
                        NIKE<span className="mx-0.5">/</span>
                        {item.category}
                      </span>
                      <p className="text-t text-[14px] font-semibold font-azeret uppercase">
                        {item.title}
                      </p>
                      <div className="flex items-center">
                        <p className="text-t text-[12px] font-azeret uppercase">
                          {item.price}
                        </p>
                        <span className="mx-2 text-t text-[12px] font-azeret uppercase">
                          •
                        </span>
                        <p className="text-t text-[12px] font-azeret uppercase">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1]  flex items-end justify-end">
                    <div className="relative w-[100px] flex items-center ">
                      <button
                        onClick={() => {
                          const updatedCart = [...cart];
                          if (updatedCart[i].quantity > 1) {
                            updatedCart[i].quantity -= 1;
                            setCart(updatedCart);
                          }
                        }}
                        className="p-1 h-6 bg-t hover:bg-gray-200 border border-f outline-none"
                      >
                        <Minus size={12} className="text-p" />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="block w-full p-1 h-6 bg-t border-x-0 border-f
                      text-[12px] font-medium font-azeret uppercase text-center outline-none placeholder:text-t
                      appearance-none
                      [&::-webkit-outer-spin-button]:appearance-none
                      [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => {
                          const updatedCart = [...cart];
                          updatedCart[i].quantity += 1;
                          setCart(updatedCart);
                        }}
                        className="p-1 h-6 bg-t hover:bg-gray-200 border border-f outline-none"
                      >
                        <Plus size={12} className="text-p" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-[1] flex justify-end col-span-1">
                    <X
                      size={26}
                      className="text-t/75 hover:text-t/100"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </motion.div>
              </div>
            ))
          )}
        </div>

        <div className="pt-5 flex justify-end">
          <div className="w-full h-fit px-6 py-3 bg-f border text-center hover:bg-p hover:border-bb group transition-all duration-200">
            <p className="text-p text-[12px] font-medium font-azeret uppercase group-hover:text-t transition-all duration-200">
              Checkout - ${getCartTotal()}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fixed w-screen h-screen inset-0 backdrop-blur-md z-40"
        onClick={() => setCartModal(false)}
        variants={cartAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </div>
  );
};
export default Cart;
