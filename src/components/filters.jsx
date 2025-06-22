import {
  opacityWScaleAnimation,
  textSlideAnimation,
  textSlideNoDelayAnimation,
} from "@/anim/anim";
import { useFilterStore } from "@/store/zustand";
import { motion } from "framer-motion";
import TextSlide from "./text-slide";
const Filters = ({ setOpenFilter }) => {
  const filters = [
    {
      category: "shoes",
      subcategories: [
        "sneakers",
        "casual",
        "running",
        "soccer",
        "basketball",
        "training",
        "skateboarding",
      ],
    },
    {
      category: "clothing",
      subcategories: [
        "casual",
        "t-shirts",
        "shorts",
        "team jerseys",
        "jackets & hoodies",
        "pants & leggings",
        "polos",
      ],
    },
    {
      category: "accessories",
      subcategories: ["caps & visors", "bags & backpacks", "balls", "socks"],
    },
  ];

  const { selectedFilter, setSelectedFilter } = useFilterStore();

  return (
    <>
      <motion.div
        className="absolute mt-6 w-[250px] h-fit py-2 px-5 bg-s border border-bb z-20"
        variants={opacityWScaleAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="flex flex-col items-start gap-2">
          {filters.map(({ category, subcategories }) => (
            <>
              <div key={category} className="h-[20px] overflow-hidden">
                <motion.h3
                  variants={textSlideNoDelayAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={category}
                  className={`${
                    selectedFilter?.category === category
                      ? "text-t/100"
                      : "text-t/75"
                  } text-[16px] font-medium font-azeret uppercase`}
                >
                  {category}
                </motion.h3>
              </div>
              <div className="flex flex-col gap-1 mt-1">
                {subcategories.map((sub, i) => (
                  <div
                    key={i}
                    className="h-[20px] overflow-hidden"
                    onClick={() => {
                      setSelectedFilter({ category, subcategory: sub });
                      setOpenFilter(false);
                    }}
                  >
                    <motion.p
                      variants={textSlideNoDelayAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={i}
                    >
                      <TextSlide
                        text={sub}
                        spanClass={
                          selectedFilter?.category === category &&
                          selectedFilter?.subcategory === sub
                            ? "text-t/100"
                            : "text-t/50"
                        }
                      />
                    </motion.p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </motion.div>
      <div
        className="fixed w-screen h-screen inset-0 z-10"
        onClick={() => setOpenFilter(false)}
      />
    </>
  );
};

export default Filters;
