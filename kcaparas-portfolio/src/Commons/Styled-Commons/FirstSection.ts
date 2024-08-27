import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const wordUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

type SectionProps = {
  isDarkMode: boolean;
};

const FirstSection = styled.section<SectionProps>`
  min-height: 100vh;
  width: 100vw;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  h2 {
    font-size: 5rem;
    font-weight: 900;
    margin: 0;
    animation: ${wordUp} 1s ease-in-out;
  }
`;

export { FirstSection, HeaderContainer };
