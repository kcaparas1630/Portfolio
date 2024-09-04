import { FC, useRef } from 'react';
import { useSpring, motion, useScroll, useTransform } from 'framer-motion';
import {
  Section,
  HeaderContainer,
  SectionContainer,
  ImageContainer,
} from './Styled-Commons/Designation';
import BetterBerries from '../Assets/better-berries.png';
import MechEng from '../Assets/mech-eng.png';
import ComponentProps from '../Types/ComponentProps';

const MobileDesignationSectionComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
  });

  const headerScale = useTransform(smoothProgress, [0.8, 0.85], [1, 0.5]);
  const headerOpacity = useTransform(smoothProgress, [0.8, 0.85], [1, 0]);

  // BetterBerries image animations
  const BBOpacity = useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const BBImgScale = useTransform(smoothProgress, [0.4, 0.5], [0.5, 1]);
  const BBImageX = useTransform(smoothProgress, [0.6, 0.7], ['0%', '600%']);
  const BBImageY = useTransform(smoothProgress, [0.4, 0.5], ['100%', '0%']);

  // MechEng image animations
  const MEOpacity = useTransform(smoothProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const MEImgScale = useTransform(smoothProgress, [0.7, 0.75], [0.5, 1]);
  const MEImageY = useTransform(smoothProgress, [0.6, 0.9], ['100%', '-20%']);

  return (
    <Section isDarkMode={isDarkMode}>
      <SectionContainer ref={targetRef}>
        <HeaderContainer style={{ scale: headerScale, opacity: headerOpacity }}>
          <h2>
            I&apos;m a Full-Stack Developer who specializes on
            <strong> Front-end Designs!</strong>
          </h2>
        </HeaderContainer>
        <motion.div
          style={{
            position: 'sticky',
            top: '50vh',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <ImageContainer
            style={{
              opacity: BBOpacity,
              scale: BBImgScale,
              x: BBImageX,
              y: BBImageY,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={BetterBerries}
              alt="better-berries-landing-page"
            />
          </ImageContainer>
        </motion.div>
        <motion.div
          style={{
            position: 'sticky',
            top: '40vh',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <ImageContainer
            style={{
              opacity: MEOpacity,
              scale: MEImgScale,
              y: MEImageY,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={MechEng}
              alt="mech-eng-symposium-landing-page"
            />
          </ImageContainer>
        </motion.div>
      </SectionContainer>
    </Section>
  );
};

export default MobileDesignationSectionComponent;
