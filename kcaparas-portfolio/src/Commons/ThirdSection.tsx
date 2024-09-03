import { FC, useRef, useState } from 'react';
import { useTransform, useSpring, useScroll } from 'framer-motion';
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
        <SkillDescContainer isDarkMode={isDarkMode}>
          <h4>Technical Skills</h4>
          <img src={skillDescription.skillImage} alt={skillDescription.skillAltImg} />
          <h3>{skillDescription.skillText}</h3>
          <SkillDescriptionTab>
            <h4>Description</h4>
          </SkillDescriptionTab>
          <SkillDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </SkillDescription>
        </SkillDescContainer>
      </SectionContainer>
    </ThirdSection>
  );
};

export default ThirdSectionComponent;
