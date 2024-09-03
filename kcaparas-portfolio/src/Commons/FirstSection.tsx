import { FC, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FirstSection, HeaderContainer, Blob } from './Styled-Commons/FirstSection';

type FirstSectionProps = {
  isDarkMode: boolean;
};

const FirstSectionComponent: FC<FirstSectionProps> = ({ isDarkMode }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.7], [2, 0]);
  const scale = useTransform(smoothProgress, [0, 0.7], [1, 0.8]);
  const y = useTransform(smoothProgress, [0, 1], [0, 50]);
  const position = useTransform(scrollYProgress, (pos) => (pos === 1 ? 'relative' : 'fixed'));
  const getRandomTranslate = () => {
    const xBlob = Math.floor(Math.random() * 100) - 50;
    const yBlob = Math.floor(Math.random() * 100) - 50;
    return `${xBlob}%, ${yBlob}%`;
  };
  const blob1Translate = getRandomTranslate();
  const blob2Translate = getRandomTranslate();

  return (
    <FirstSection
      ref={targetRef}
      style={{ opacity }}
      isDarkMode={isDarkMode}
    >
      <HeaderContainer style={{ scale, y, position }}>
        <motion.h2
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          I&apos;m Kent Hudson Caparas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          A full-stack developer
        </motion.p>
      </HeaderContainer>
      <Blob
        topPos="40%"
        leftPos="40%"
        blobTranslate={blob1Translate}
      />
      <Blob
        topPos="10%"
        leftPos="10%"
        blobTranslate={blob2Translate}
      />
    </FirstSection>
  );
};
export default FirstSectionComponent;
