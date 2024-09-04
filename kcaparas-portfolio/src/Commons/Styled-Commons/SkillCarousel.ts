import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type DarkModeProps = {
  isDarkMode?: boolean;
  inView?: boolean;
  disabled?: boolean;
};

const CarouselContainer = styled.div<DarkModeProps>`
  height: 100%;
  width: 95%;
  position: sticky;
  top: 85vh;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  @media (min-width: 1024px) {
    width: 15%;
    position: sticky;
    top: 20vh;
    left: 80vw;
    display: flex;
    gap: 24px;
    flex-direction: column;
    transform: translateX(${(props) => (props.inView ? '0' : '100%')});
    opacity: ${(props) => (props.inView ? '0.8' : '0')};
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }
`;

const Button = styled.button<DarkModeProps>`
  background: none;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  &:hover {
    color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};
  }
  z-index: 1;
`;

const SkillList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const SkillItem = styled(motion.div)<DarkModeProps>`
  width: 100%;
  height: 100%;
  max-width: 100px;
  min-height: 50px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};
  h4 {
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
  @media (min-width: 1024px) {
    max-width: 300px;
    min-height: 100px;
    gap: 12px;
    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }
  }
`;

const SkillItemCircle = styled.div<DarkModeProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
  &:hover {
    box-shadow: ${(props) => (props.isDarkMode ? '0 0 2px 2px #E68369' : '0 0 0 2px #111')};
  }
  transition: box-shadow 0.5s ease-in-out;
  order: 1;

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;

export { CarouselContainer, Button, SkillList, SkillItem, SkillItemCircle };
