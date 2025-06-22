import { menuAnimation, textSlideAnimation } from "@/anim/anim";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/zustand";
import TextSlide from "./text-slide";

const Menu = ({ setMenuModal, menuModal }) => {
  const { selectedMenu, setSelectedMenu } = useMenuStore();

  const navItems = [
    { id: "about", label: "about" },
    { id: "agency", label: "agency" },
    { id: "reel", label: "nike® phantom 6" },
    { id: "contact", label: "contact" },
  ];

  return (
    <div className="fixed w-screen h-screen flex items-center justify-between inset-0 z-100">
      <motion.div
        className="relative size-full flex-[1.5] bg-s z-50 select-none flex flex-col p-5 max-h-screen overflow-hidden max-lg:flex-[3]"
        variants={menuAnimation}
        initial="closed"
        animate={menuModal && "open"}
        exit="closed"
      >
        <div className="flex items-center justify-end">
          <div
            className="flex items-center gap-2 group"
            onClick={() => setMenuModal(false)}
          >
            <TextSlide text="CLOSE" />
            <X
              size={18}
              className="text-t transition-all duration-500 group-hover:rotate-45"
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col">
          {navItems.map((item, i) => (
            <div key={item.id} className="h-fit overflow-hidden">
              <motion.h2
                variants={textSlideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={i}
                onClick={() => {
                  setSelectedMenu(item.id);
                  setMenuModal(false);
                }}
                className={`font-semibold font-azeret uppercase transition-colors duration-200`}
              >
                <TextSlide
                  key={i}
                  text={item.label}
                  spanClass={
                    selectedMenu === item.id
                      ? "text-t/100 text-[52px]"
                      : "text-t/50 text-[52px]"
                  }
                  customFontSize="!h-[72px]"
                />
              </motion.h2>
            </div>
          ))}
        </div>

        <div className="w-full h-full flex items-end justify-end">
          <div className="flex items-center gap-2">
            {["FB", "X", "GRAM", "YT"].map((social, i) => (
              <TextSlide key={i} text={social} spanClass="px-2" />
            ))}
          </div>
        </div>
      </motion.div>
      <div className="relative size-full flex-[1] max-ds:hidden"></div>
      <div className="relative size-full flex-[1.5] max-md:hidden"></div>

      <motion.div
        className="fixed w-screen h-screen inset-0 backdrop-blur-md z-40"
        onClick={() => setMenuModal(false)}
        key={menuModal}
        variants={menuAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </div>
  );
};

export default Menu;
