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
