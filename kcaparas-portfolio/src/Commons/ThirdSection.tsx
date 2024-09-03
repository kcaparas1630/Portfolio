import { FC, useRef, useState } from 'react';
import { motion, useTransform, useSpring, useScroll, AnimatePresence } from 'framer-motion';
import SkillSetArray from '../Constants/SkillSetArray';
import SkillCarousel from './SkillCarousel';
import {
  ThirdSection,
  SectionContainer,
  HeaderContainer,
  StyledImage,
  ImageContainer,
  SkillDescContainer,
  SkillDescription,
  SkillDescriptionTab,
} from './Styled-Commons/ThirdSection';
import Picture from '../Assets/kent-nobg2.png';
import SkillSetTypes from '../Types/SkillSetTypes';

type ThirdSectionProps = {
  isDarkMode: boolean;
};

const ThirdSectionComponent: FC<ThirdSectionProps> = ({ isDarkMode }) => {
  const getSkillArray = SkillSetArray(isDarkMode);
  const [skillDescription, setSkillDescription] = useState<SkillSetTypes>(getSkillArray[0]);
  console.log('Description updated: ', skillDescription);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
  });
  const headerScale = useTransform(smoothProgress, [0, 0.15], [0.5, 1]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

  return (
    <ThirdSection isDarkMode={isDarkMode}>
      <SectionContainer ref={targetRef}>
        <HeaderContainer style={{ scale: headerScale, opacity: headerOpacity }}>
          <h2>Kent&apos;s skill points</h2>
        </HeaderContainer>
        <ImageContainer>
          <StyledImage
            src={Picture}
            alt="alt"
          />
        </ImageContainer>
        <SkillCarousel
          getSkillArray={getSkillArray}
          isDarkMode={isDarkMode}
          setSkillDescription={setSkillDescription}
        />
        <AnimatePresence mode="wait">
          <SkillDescContainer
            isDarkMode={isDarkMode}
            key={skillDescription.id}
          >
            <h4>Technical Skills</h4>
            <motion.img
              src={skillDescription.skillImage}
              alt={skillDescription.skillAltImg}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {skillDescription.skillText}
            </motion.h3>
            <SkillDescriptionTab>
              <h4>Description</h4>
            </SkillDescriptionTab>
            <SkillDescription
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </SkillDescription>
          </SkillDescContainer>
        </AnimatePresence>
      </SectionContainer>
    </ThirdSection>
  );
};

export default ThirdSectionComponent;
