import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SkillSetTypes from '../Types/SkillSetTypes';
import {
  CarouselContainer,
  Button,
  SkillItem,
  SkillItemCircle,
  SkillList,
} from './Styled-Commons/SkillCarousel';

type SkillCarouselType = {
  getSkillArray: SkillSetTypes[];
  isDarkMode: boolean;
  setSkillDescription: Dispatch<SetStateAction<SkillSetTypes>>;
};
const SkillCarousel: React.FC<SkillCarouselType> = ({
  getSkillArray,
  isDarkMode,
  setSkillDescription,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % getSkillArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + getSkillArray.length) % getSkillArray.length);
  };

  const setSkillClickWrapper = (skill: SkillSetTypes) => {
    setSkillDescription(skill);
  };

  const visibleSkills = [
    getSkillArray[currentIndex],
    getSkillArray[(currentIndex + 1) % getSkillArray.length],
    getSkillArray[(currentIndex + 2) % getSkillArray.length],
    getSkillArray[(currentIndex + 3) % getSkillArray.length],
  ];

  return (
    <CarouselContainer>
      <Button
        onClick={prevSlide}
        isDarkMode={isDarkMode}
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          size="lg"
        />
      </Button>
      <SkillList>
        <AnimatePresence initial={false}>
          {visibleSkills.map((skill) => (
            <SkillItem
              key={skill.id}
              isDarkMode={isDarkMode}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <SkillItemCircle
                isDarkMode={isDarkMode}
                onClick={() => setSkillClickWrapper(skill)}
              >
                <img
                  src={skill.skillImage}
                  alt={skill.skillAltImg}
                />
              </SkillItemCircle>
              <h4>{skill.skillText}</h4>
            </SkillItem>
          ))}
        </AnimatePresence>
      </SkillList>
      <Button
        onClick={nextSlide}
        isDarkMode={isDarkMode}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="lg"
        />
      </Button>
    </CarouselContainer>
  );
};

export default SkillCarousel;
