export const slideUpAnimation = {
  initial: { y: "100%" },
  animate: (custom) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.025 * custom,
    },
  }),
  exit: (custom) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.025 * custom,
    },
  }),
};

export const slideUpWExitAnimation = {
  initial: { y: "150%" },
  animate: (custom) => ({
    y: "0%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: custom,
    },
  }),
  exit: (custom) => ({
    y: "150%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: custom,
    },
  }),
};

export const textSlideSingleAnimation = {
  initial: { y: "100%" },
  animate: {
    y: "0%",

    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const textSlideAnimation = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5 + 0.025 * i,
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.025 * i,
    },
  }),
};

export const textSlideNoDelayAnimation = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.025 * i,
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.025 * i,
    },
  }),
};

export const opacityOnlyToLogo = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const clipAnimation = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05,
    },
  },
  exit: {
    clipPath: "inset(100% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const clipReelAnimation = {
  initial: { clipPath: "inset( 0% 0% 100% 0%)" },
  animate: (custom) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: custom,
    },
  }),
  exit: {
    clipPath: "inset( 0% 0% 100% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const clipImageAnimation = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05,
    },
  },
  exit: {
    clipPath: "inset(100% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacityWScaleAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.25, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};

export const opacityAnimation = {
  initial: { opacity: 0 },
  animate: (custom) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: custom,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export const cartAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    left: "0",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    left: "100%",
    transition: {
      duration: 0.5,
      delay: 0.4,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    right: "0%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    right: "100%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};
