const ContainerVariants = {
  hidden: {
    opacity: 0,
    y: '100vw',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

export default ContainerVariants;
