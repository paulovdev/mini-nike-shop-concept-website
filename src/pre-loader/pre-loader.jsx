import { clipAnimation, slideUpWExitAnimation } from "@/anim/anim";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const PreLoader = () => {
  const controls = useAnimation();
  const [text, setText] = useState(false);

  useEffect(() => {
    const animation = async () => {
      setText(true);
      await controls.start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
          delay: 1,
        },
      });
      setText(false);
      await controls.start({
        top: 0,
        height: "0vh",
        clipPath: "inset(0% 0% 10% 0%)",
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        },
      });
    };
    animation();
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-screen h-screen inset-0 bg-s z-100"
        initial={{ clipPath: "inset(0px 0px 0px 0px)" }}
        animate={controls}
      >
        <motion.div
          className="size-full flex items-center justify-center"
          animate={{ y: !text && -150, transition: { duration: 1 } }}
        >
          <div className="relative flex h-[80px] overflow-hidden">
            <motion.div
              variants={clipAnimation}
              initial="initial"
              animate={text && "animate"}
            >
              <Image
                src={"/nike-logo.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[100px] h-[35px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PreLoader;
