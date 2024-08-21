import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import reactBlack from '../Assets/react/react-black.png';
import reactWhite from '../Assets/react/react-white.png';
import {
  SkillsContainer,
  SkillsLeftContainer,
  SkillsHeader,
  SkillsRightContainer,
  SkillsSetContainer,
  SkillSetItem,
} from './Styled-Commons/Skills';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: FC<SkillsProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <SkillsContainer isDarkMode={isDarkMode}>
      <SkillsLeftContainer>
        <SkillsHeader
          ref={ref}
          inView={inView}
        >
          I am proud to share my skills in these area!
        </SkillsHeader>
      </SkillsLeftContainer>
      <SkillsRightContainer>
        <SkillsSetContainer>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
          <SkillSetItem isDarkMode={isDarkMode} ref={ref} inView={inView}>
            <img src={isDarkMode ? reactWhite : reactBlack} alt="react-logo" />
            <p>React</p>
          </SkillSetItem>
        </SkillsSetContainer>
      </SkillsRightContainer>
    </SkillsContainer>
  );
};

export default Skills;
