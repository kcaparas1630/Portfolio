import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const paragato = keyframes`
  from {
    transform: rotate(-20deg);
  }
  to {
    transform: rotate(20deg);
  }
`;

type SectionProps = {
  isDarkMode: boolean;
};

const FirstSection = styled.section<SectionProps>`
  min-height: 100vh;
  width: 100vw;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  position: relative;
  display: flex;
`;
const HeaderContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 7rem;
    font-weight: 900;
    margin: 0;
  }
`;
const Parachute = styled.div`
  position: absolute;
  z-index: 1;
  left: 30%;
  img {
    width: 35%;
    height: 35%;
    transform-origin: 50px 5px;
    transition: transform 1s ease-in 0s;
    animation-duration: 2.2s;
    animation-name: ${paragato};
    animation-iteration-count: infinite;
    animation-direction: alternate;
    -webkit-animation-duration: 2.2s;
    -webkit-animation-name: ${paragato};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out; /* Chrome, Safari, Opera */
    animation-timing-function: ease-in-out;
  }
`;

export { FirstSection, HeaderContainer, Parachute };
