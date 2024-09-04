import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillSetArray from '../Constants/SkillSetArray';
import ComponentProps from '../Types/ComponentProps';
import {
  SkillsContainer,
  SkillsLeftContainer,
  SkillsHeader2,
  SkillsHeader3,
  SkillsRightContainer,
  SkillsSetContainer,
  SkillSetItem,
} from './Styled-Commons/Skills';


const Skills: FC<ComponentProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const getSkillSetArray = SkillSetArray(isDarkMode);
  return (
    <SkillsContainer isDarkMode={isDarkMode} ref={ref}>
      <SkillsLeftContainer>
        <SkillsHeader2
          inView={inView}
          isDarkMode={isDarkMode}
        >
          I am proud to share my skills in these area!
        </SkillsHeader2>
        <SkillsHeader3
          inView={inView}
          isDarkMode={isDarkMode}
        >
          I would like to tell you more about everything but I&apos;ll post the highlights!
        </SkillsHeader3>
      </SkillsLeftContainer>
      <SkillsRightContainer>
        <SkillsSetContainer>
          {getSkillSetArray.map((skill) => (
            <SkillSetItem
              isDarkMode={isDarkMode}
              inView={inView}
              key={skill.id}
            >
              <img
                src={skill.skillImage}
                alt={skill.skillAltImg}
              />
              <p>{skill.skillText}</p>
            </SkillSetItem>
          ))}
        </SkillsSetContainer>
      </SkillsRightContainer>
    </SkillsContainer>
  );
};

export default Skills;
