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
    isDarkMode: boolean;
};

const StyledHeader = styled.div<HeaderProps>`
  width: 100vw;
  padding: 10px 30px 10px 40px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: ${(props) => (props.isDarkMode ? '-15px 15px 10px -15px #FBF6E2' : '-15px 15px 10px -15px #111')};
  h2,
  a {
    opacity: 0;
    text-decoration: none;
    color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
    font-size: 20px;
    display: inline-block;
    overflow: hidden;
    animation: ${pullUp} 0.5s ease forwards;
  }
  .active-link {
    color: #e68369;
    font-weight: 700;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 60px;
  position: absolute;
  left: 45%;
  transform: translateX(-45%);
`;

const StyledListItem = styled.li`
  list-style-type: none;

  a {
    opacity: 0;
    text-decoration: none;
    font-size: 18px;
    display: inline-block;
    overflow: hidden;
    animation: ${pullUp} 0.5s ease forwards;
  }

  a:hover {
    color: #e68369;
    transition: 0.5s ease-out;
  }
`;

const StyledIconButton = styled.button<HeaderProps>`
  display: flex;
  justify-content: flex-end;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#E68369')};
  font-size: 24px;
  position: absolute;  
  right: 10%;
  animation: ${pullUp} 0.5s ease forwards;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #FF8225;
    font-size: 28px;
    transition: 0.5s ease-out;
  }
`;

export { StyledHeader, StyledUl, StyledListItem, StyledIconButton };
