import { Variants } from 'framer-motion';

const SkillVariants: Variants = {
  hidden: ({ direction }) => ({
    opacity: 0,
    y: direction > 0 ? 50 : -50,
  }),
  visible: ({ index }) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 1, delay: index * 0.1 + 0.3 },
      y: { type: 'spring', stiffness: 300, damping: 30, delay: index * 0.1 + 0.3 },
    },
  }),
  exit: ({ direction, index }) => ({
    opacity: 0,
    y: direction > 0 ? -50 : 50,
    transition: {
      opacity: { duration: 0.2, delay: (3 - index) * 0.1 },
      y: { duration: 0.2, delay: (3 - index) * 0.1 },
    },
  }),
};

export default SkillVariants;
