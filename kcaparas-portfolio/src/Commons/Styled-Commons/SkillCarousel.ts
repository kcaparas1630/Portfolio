import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type DarkModeProps = {
  isDarkMode: boolean;
};

const CarouselContainer = styled.div`
  height: 100%;
  width: 15%;
  position: sticky;
  top: 20vh;
  left: 80vw;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button<DarkModeProps>`
  background: none;
  border: none;
  cursor: pointer;
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
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const SkillItem = styled(motion.div)<DarkModeProps>`
  width: 100%;
  height: 100%;
  max-width: 300px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
`;

const SkillItemCircle = styled.div<DarkModeProps>`
  width: 100px;
  height: 100px;
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
    box-shadow: ${(props) =>
      props.isDarkMode ? '0 0 2px 2px #E68369' : '0 0 0 2px #111'};
  }
  transition: box-shadow 0.5s ease-in-out;
`;

export { CarouselContainer, Button, SkillList, SkillItem, SkillItemCircle };
