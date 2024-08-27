import styled from '@emotion/styled';
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
    z-index: 2;
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
      font-size: 20px;
      display: inline-block;
      animation: ${pullUp} 0.5s ease forwards;
    }

    .active-link {
      color: var(--accent-color) !important;
      font-weight: 700;
      border-bottom: 2px solid var(--accent-color);
    }

    @media (min-width: 768px) {
      padding: 25px 0;
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
  transition: transform 0.3s ease-in-out;
  ${(props) => props.isOpen && 'transform: rotate(90deg);'}
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul<HeaderProps>`
  label: StyledUl;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: absolute;
  background-color: ${(props) =>
    props.isDarkMode ? 'var(--native-dark-transparent-color)' : '#fbf6e2'};
  width: 100%;
  margin-top: 0;
  max-height: ${(props) => (props.isOpen ? '60vh' : '0')};
  transition: max-height 0.5s ease-in-out;
  right: 0;
  top: 60px;
  padding: 20px 10px 20px 0;
  z-index: 1000 !important;
  box-shadow: ${(props) => (props.isDarkMode ? '' : '-15px 15px 10px -15px #111')};

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
  }
`;

const StyledListItem = styled.li<HeaderProps>`
  && {
    label: StyledListItem;
    list-style-type: none;
    padding: 10px;
    width: 90%;
    cursor: pointer;
    box-shadow: ${(props) => (props.isDarkMode ? '' : '-15px 15px 10px -15px #111')};
    transition: box-shadow 0.3s ease-in-out;

    a {
      text-decoration: none !important;
      font-size: 18px !important;
      display: inline-block;
      animation: ${pullUp} 0.5s ease forwards;
    }

    a:hover {
      color: #e68369 !important;
      transition: color 0.5s ease-out;
    }

    @media (min-width: 768px) {
      box-shadow: none;
    }
  }
`;

const StyledIconButton = styled.button<HeaderProps>`
  label: StyledIconButton;
  display: ${(props) => (props.isMobile ? 'flex' : 'none')};
  background: none;
  border: none;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#E68369')};
  font-size: 24px;
  cursor: pointer;
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
    align-items: center;
    font-size: 28px;
    position: absolute;
    right: 5%;
  }
  .icon {
    animation: ${(props) => (props.isRotating ? rotateIcon : 'none')} 1s ease-in-out;
  }
`;

export { StyledHeader, StyledUl, StyledListItem, StyledIconButton, HamburgerIcon };
