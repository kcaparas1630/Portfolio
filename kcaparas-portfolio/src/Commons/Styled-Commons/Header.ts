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

type HeaderProps = {
  isDarkMode?: boolean;
  isOpen?: boolean;
  isMobile?: boolean;
};

const StyledHeader = styled.div<HeaderProps>`
  width: 100vw;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: ${(props) =>
    props.isDarkMode ? '-10px 15px 10px -15px #FBF6E2' : '-15px 15px 10px -15px #111'};
  h2,
  a {
    text-decoration: none;
    color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
    font-size: 20px;
    display: inline-block;
    animation: ${pullUp} 0.5s ease forwards;
  }
  .active-link {
    color: #e68369;
    font-weight: 700;
  }
`;

const HamburgerIcon = styled.button<HeaderProps>`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#e68369')};
  position: absolute;
  right: 15%;
  transition: transform 0.3s ease-in-out;
  ${(props) => props.isOpen && 'transform: rotate(90deg);'}
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul<HeaderProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: absolute;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
  width: 100%;
  max-height: ${(props) => (props.isOpen ? '50vh' : '0')};
  transition: max-height 0.5s ease-in-out;
  right: 0;
  top: 60px;
  padding: 20px 10px 0 0;
  z-index: 1000;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    position: relative;
    top: 0;
    padding-top: 0;
    right: 55%;
    transform: translateX(55%);
    background-color: transparent;
    box-shadow: none;
    gap: 60px;
  }
`;

const StyledListItem = styled.li<HeaderProps>`
  list-style-type: none;
  padding: 10px;
  width: 90%;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isDarkMode ? '-10px 15px 10px -15px #FBF6E2' : '-15px 15px 10px -15px #111'};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(props) =>
      props.isDarkMode ? '15px 15px 10px -15px #FBF6E2' : '-15px 15px 10px -15px #111'};
  }

  a {
    text-decoration: none;
    font-size: 18px;
    display: inline-block;
    animation: ${pullUp} 0.5s ease forwards;
  }

  a:hover {
    color: #e68369;
    transition: 0.5s ease-out;
  }

  @media (min-width: 768px) {
    box-shadow: none;
  }
`;

const StyledIconButton = styled.button<HeaderProps>`
  display: ${(props) => (props.isMobile ? 'flex' : 'none')};
  background: none;
  border: none;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#E68369')};
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: ${(props) => (props.isMobile ? 'none' : 'flex')};
    align-items: center;
    font-size: 28px;
    position: absolute;
    right: 5%;
    transition:
      color 0.3s ease,
      font-size 0.3s ease;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #ff8225;
    }
  }
`;

export { StyledHeader, StyledUl, StyledListItem, StyledIconButton, HamburgerIcon };
