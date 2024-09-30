import { FC, useRef, useState } from 'react';
import {
  motion,
  useTransform,
  useSpring,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from 'framer-motion';
import SkillSetArray from '../../Constants/SkillSetArray';
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
} from './Styled-components/ThirdSection';
import Picture from '../../Assets/kent-nobg2.png';
import SkillSetTypes from '../../Types/SkillSetTypes';
import ComponentProps from '../../Types/ComponentProps';

const DesktopThirdSection: FC<ComponentProps> = ({ isDarkMode }) => {
  const getSkillArray = SkillSetArray(isDarkMode);
  const [skillDescription, setSkillDescription] = useState<SkillSetTypes>(getSkillArray[0]);
  const [inView, setInView] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
  });
  const headerScale = useTransform(smoothProgress, [0, 0.15, 0.75, 1], [0.5, 1, 1, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.15, 0.75, 1], [0, 1, 1, 0]);
  const position = useTransform(scrollYProgress, (pos) => (pos >= 0.9 ? 'relative' : 'sticky'));
  const PictureOpacity = useTransform(smoothProgress, [0, 0.7], [0, 1]);
  const PictureScale = useTransform(smoothProgress, [0, 1], [0.5, 1]);
  const PictureY = useTransform(smoothProgress, [0, 1], ['100%', '-20%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.5) {
      setInView(true);
    } else {
      setInView(false);
    }
  });

  return (
    <ThirdSection isDarkMode={isDarkMode}>
      <SectionContainer ref={targetRef}>
        <HeaderContainer style={{ scale: headerScale, opacity: headerOpacity, position }}>
          <h2>Kent&apos;s skill points</h2>
        </HeaderContainer>
        <ImageContainer style={{ opacity: PictureOpacity, scale: PictureScale, y: PictureY }}>
          <StyledImage
            src={Picture}
            alt="alt"
          />
        </ImageContainer>
        <SkillCarousel
          inView={inView}
          getSkillArray={getSkillArray}
          isDarkMode={isDarkMode}
          setSkillDescription={setSkillDescription}
        />
        <AnimatePresence mode="wait">
          <SkillDescContainer
            inView={inView}
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
              {skillDescription.skillDesc}
            </SkillDescription>
          </SkillDescContainer>
        </AnimatePresence>
      </SectionContainer>
    </ThirdSection>
  );
};

export default DesktopThirdSection;
