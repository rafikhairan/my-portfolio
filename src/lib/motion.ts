export const slideInFromLeft = (delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: -120,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const slideInFromRight = (delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: 120,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
