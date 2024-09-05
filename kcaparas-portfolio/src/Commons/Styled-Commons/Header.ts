import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const pullUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const rotateIcon = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type HeaderProps = {
  isDarkMode?: boolean;
  isOpen?: boolean;
  isMobile?: boolean;
  isHeaderVisible?: boolean;
  isRotating?: boolean;
};

const StyledHeader = styled.div<HeaderProps>`
  && {
    label: StyledHeader;
    position: fixed;
    top: 0;
    z-index: 30;
    width: 100%;
    padding: 35px 0;
    display: flex;
    align-items: center;
    background-color: ${(props) => (props.isDarkMode ? 'var(--native-dark-bg-color)' : '#fbf6e2')};
    transform: translateY(${(props) => (props.isHeaderVisible ? '0' : '-100%')});
    transition: transform 0.3s ease;
    box-shadow: ${(props) =>
      props.isDarkMode ? '-10px 15px 10px -15px #E68369' : '-15px 15px 10px -15px #111'};
    h2 {
      position: absolute;
      left: 25px;
    }
    h2,
    a {
      text-decoration: none !important;
      color: ${(props) =>
        props.isDarkMode
          ? 'var(--native-dark-font-color) !important'
          : 'var(--native-light-font-color)'};
      display: inline-block;
      animation: ${pullUp} 0.5s ease forwards;
    }

    .active-link {
      color: var(--accent-color) !important;
      font-weight: 700;
    }

    @media (min-width: 768px) {
      padding: 0;
      justify-content: space-evenly;
    }
  }
`;

const HamburgerIcon = styled.button<HeaderProps>`
  label: HamburgerIcon;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#e68369')};
  position: absolute;
  right: 5%;
  z-index: 35;
  transition: transform 0.3s ease-in-out;
  ${(props) => props.isOpen && 'transform: rotate(90deg);'}
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled(motion.ul)<HeaderProps>`
  label: StyledUl;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  background-color: ${(props) =>
    props.isDarkMode ? 'var(--native-dark-transparent-color)' : '#fbf6e2'};
  width: 100%;
  height: 90vh;
  top: 0;
  left: 0;
  padding: 80px 10px 20px 0;
  z-index: 10;
  box-shadow: ${(props) => (props.isDarkMode ? '' : '-15px 15px 10px -15px #111')};
  overflow-y: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    margin: 16px 0;
    position: relative;
    top: 0;
    padding: 0 10px 0 0;
    background-color: transparent;
    box-shadow: none;
    gap: 60px;
    overflow-y: visible;
  }
`;

const StyledListItem = styled(motion.li)<HeaderProps>`
  && {
    label: StyledListItem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 90%;
    cursor: pointer;

    a {
      text-decoration: none !important;
      font-size: 2.5rem;
      display: inline-block;
    }

    a:hover {
      color: #e68369 !important;
      transition: color 0.5s ease-out;
    }

    @media (min-width: 1024px) {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

const StyledIconButton = styled.button<HeaderProps>`
  label: StyledIconButton;
  width: 100%;
  display: ${(props) => (props.isMobile ? 'flex' : 'none')};
  background: none;
  border: none;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#E68369')};
  font-size: 24px;
  cursor: pointer;
  gap: 24px;
  z-index: 35;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px;
  }
  transition:
    color 0.3s ease,
    font-size 0.3s ease;
  transform: 1s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ff8225;
  }
  @media (min-width: 768px) {
    display: ${(props) => (props.isMobile ? 'none' : 'flex')};
    position: fixed;
    right: 5%;
    align-items: center;
    font-size: 28px;
    position: absolute;
    right: 5%;
    width: auto;
  }
  .icon {
    animation: ${(props) => (props.isRotating ? rotateIcon : 'none')} 1s ease-in-out;
  }
`;

export { StyledHeader, StyledUl, StyledListItem, StyledIconButton, HamburgerIcon };
