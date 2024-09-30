import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import SkillSetTypes from '../../Types/SkillSetTypes';
import SkillVariants from '../../Motion-Variants/Skill-Variants';
import {
  CarouselContainer,
  Button,
  SkillItem,
  SkillItemCircle,
  SkillList,
} from './Styled-components/SkillCarousel';
import ComponentProps from '../../Types/ComponentProps';

interface SkillCarouselType extends ComponentProps {
  getSkillArray: SkillSetTypes[];
  setSkillDescription: Dispatch<SetStateAction<SkillSetTypes>>;
  inView: boolean;
}
const SkillCarousel: React.FC<SkillCarouselType> = ({
  getSkillArray,
  isDarkMode,
  setSkillDescription,
  inView,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const mobileOrTablet = useMediaQuery({
    query: '(min-width: 375px)',
  });

  const nextSlide = () => {
    if (currentIndex + 4 < getSkillArray.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDirection(1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setDirection(-1);
    }
  };

  const setSkillClickWrapper = (skill: SkillSetTypes) => {
    setSkillDescription(skill);
  };

  const visibleSkills = getSkillArray.slice(currentIndex, currentIndex + 4);

  return (
    <CarouselContainer inView={inView}>
      <Button
        onClick={prevSlide}
        isDarkMode={isDarkMode}
        disabled={currentIndex === 0}
      >
        {mobileOrTablet && !isDesktopOrLaptop && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
          />
        )}
        {isDesktopOrLaptop && (
          <FontAwesomeIcon
            icon={faChevronUp}
            size="lg"
          />
        )}
      </Button>
      <SkillList>
        <AnimatePresence initial={false}>
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              custom={{ direction, index }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={SkillVariants}
            >
              <SkillItem isDarkMode={isDarkMode}>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </SkillList>
      <Button
        onClick={nextSlide}
        isDarkMode={isDarkMode}
        disabled={currentIndex + 4 >= getSkillArray.length}
      >
        {mobileOrTablet && !isDesktopOrLaptop && (
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
          />
        )}
        {isDesktopOrLaptop && (
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
          />
        )}
      </Button>
    </CarouselContainer>
  );
};

export default SkillCarousel;
