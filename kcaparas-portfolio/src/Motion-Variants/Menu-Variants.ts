const MenuVariants = {
  initial: {
    scaleY: 0,
    opacity: 0,
    originY: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default MenuVariants;
