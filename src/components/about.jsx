import Image from "next/image";
import { motion } from "framer-motion";
import {
  textSlideSingleAnimation,
  textSlideAnimation,
  clipReelAnimation,
  opacityAnimation,
} from "@/anim/anim";

const aboutContent = [
  "Digital creator passionate about motion and interactivity, crafting",
  "captivating experiences on the web. Currently living in Lyon, France (69 la trik).",
  "Working with Beaucoup Studio and taking on select freelance projects.",
  "ㅤ",
  "Frontend developer specializing in animation and fluid user journeys, aiming to",
  "build meaningful digital spaces. Lyon-based (69 represent), France.",
  "Partnered with Beaucoup Studio + available for freelance collabs.",
  "ㅤ",
  "Creative technologist exploring playful interactions and dynamic visuals,",
  "designing immersive online narratives. Based in Lyon, France.",
  "Collaborating with Beaucoup Studio and open for freelance gigs.",
  "ㅤ",
  "Interactive developer blending code and design to deliver",
  "rich, motion-driven experiences. From Lyon, France (shoutout 69 la trik).",
  "Part of Beaucoup Studio + active freelancer.",
];

const About = () => {
  return (
    <div className="h-fit p-10 max-ds:p-5">
      <div className="mb-4 h-fit overflow-hidden">
        <motion.h2
          className="text-t text-[16px] font-medium font-azeret uppercase"
          variants={textSlideSingleAnimation}
          initial="initial"
          animate="animate"
        >
          About
        </motion.h2>
      </div>
      <div className="mb-8">
        {aboutContent.map((desc, i) => (
          <div key={i} className="h-fit overflow-hidden">
            <motion.p
              variants={textSlideAnimation}
              initial="initial"
              animate="animate"
              className="text-t/75 text-[12px] font-azeret uppercase"
              custom={i}
            >
              {desc}
            </motion.p>
          </div>
        ))}
      </div>

      <div className="py-28 flex items-center justify-center">
        <motion.figure
          variants={clipReelAnimation}
          initial="initial"
          animate="animate"
          custom={0.5}
        >
          <Image
            src={"/nike-logo.png"}
            width={200}
            height={40}
            alt="Nike logo"
          />
        </motion.figure>
      </div>
    </div>
  );
};

export default About;
