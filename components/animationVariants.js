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
    height: "92%",
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

const defaultPathVariant = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  dom: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

export const linePathsBlue = {
  initial: {
    ...defaultPathVariant.initial,
    fill: "rgba(7, 190, 184, 0)",
  },
  dom: {
    ...defaultPathVariant.dom,
    fill: "rgba(7, 190, 184, 1)",
  },
};

export const linePathsPurple = {
  initial: {
    ...defaultPathVariant.initial,
    fill: "rgba(203, 72, 183, 0)",
  },
  dom: {
    ...defaultPathVariant.dom,
    fill: "rgba(203, 72, 183, 1)",
  },
};

export const linePathsLightBlue = {
  initial: {
    ...defaultPathVariant.initial,
    fill: "rgba(152, 223, 234, 0)",
  },
  dom: {
    ...defaultPathVariant.dom,
    fill: "rgba(152, 223, 234, 1)",
  },
};

export const linePathsCopper = {
  initial: {
    ...defaultPathVariant.initial,
    fill: "rgba(230, 199, 156, 0)",
  },
  dom: {
    ...defaultPathVariant.dom,
    fill: "rgba(230, 199, 156, 1)",
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
      delay: 1.1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//Tag animation
export const Stagger = {
  initial: {
    opacity: 0,
  },
  dom: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 1,
    },
  },
};

export const tagVariant = {
  initial: {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
  },
  dom: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
    },
  },
};

// General animations

export const slowFadePop = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  dom: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      mass: 2,
      stiffness: 50,
    },
  },
};
