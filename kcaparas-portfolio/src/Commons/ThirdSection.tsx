import { FC, useRef } from 'react';
import { useTransform, useSpring, useScroll } from 'framer-motion';
import {
  ThirdSection,
  SectionContainer,
  HeaderContainer,
  StyledImage,
  ImageContainer,
  SkillList,
  SkillItem,
  SkillDescContainer,
  SkillDescription,
} from './Styled-Commons/ThirdSection';
import Picture from '../Assets/kent-nobg2.png';

type ThirdSectionProps = {
  isDarkMode: boolean;
};

const ThirdSectionComponent: FC<ThirdSectionProps> = ({ isDarkMode }) => {
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
        <SkillList>
          <SkillItem isDarkMode={isDarkMode}>
            <p>Hello World</p>
          </SkillItem>
          <SkillItem isDarkMode={isDarkMode}>
            <p>Hello World2</p>
          </SkillItem>
          <SkillItem isDarkMode={isDarkMode}>
            <p>Hello World3</p>
          </SkillItem>
          <SkillItem isDarkMode={isDarkMode}>
            <p>Hello World4</p>
          </SkillItem>
        </SkillList>
        <SkillDescContainer>
          <SkillDescription isDarkMode={isDarkMode}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </SkillDescription>
        </SkillDescContainer>
      </SectionContainer>
    </ThirdSection>
  );
};

export default ThirdSectionComponent;
