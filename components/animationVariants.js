//Animations for Navbar
export const navbarVariantSm = {
  initial: {
    width: "50%",
    opacity: 0,
  },
  dom: {
    width: "90%",
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      bounce: 0.15,
      damping: 18,
      when: "beforeChildren",
    },
  },
};

export const navbarVariantLg = {
  initial: {
    height: "50%",
    opacity: 0,
  },
  dom: {
    height: "95%",
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      bounce: 0.15,
      damping: 18,
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};

export const navItemVariant = {
  initial: {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
  },
  dom: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      bounce: 0.15,
      damping: 18,
    },
  },
};
// Animations for the pattern svgs
export const linePathsBlue = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(7, 190, 184, 0)",
  },
  dom: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(7, 190, 184, 1)",
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

export const linePathsPurple = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(203, 72, 183, 0)",
  },
  dom: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(203, 72, 183, 1)",
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

export const linePathsLightBlue = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(152, 223, 234, 0)",
  },
  dom: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(152, 223, 234, 1)",
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

export const linePathsCopper = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(230, 199, 156, 0)",
  },
  dom: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(230, 199, 156, 1)",
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

export const pinPaths = {
  initial: {
    opacity: 0,
    // scale: 0,
  },
  dom: {
    opacity: 1,
    // scale: 1,
    transition: {
      delay: 2.1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
