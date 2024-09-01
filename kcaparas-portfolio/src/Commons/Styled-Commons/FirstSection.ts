import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const animate = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }
  50% {
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 1.15;
  }
  100% {
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 1.05;
  }
`;

type SectionProps = {
  isDarkMode: boolean;
};

const FirstSection = styled(motion.section)<SectionProps>`
  margin-top: 10vh;
  height: 90vh;
  width: 95vw;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 12px;

  @media (min-width: 1024px) {
    margin-top: 0;
    padding: 0;
    height: 80vh;
    width: 100vw;
  }
`;
const HeaderContainer = styled(motion.div)`
  position: fixed;
  top: 25%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }

  @media (min-width: 1024px) {
    top: 40%;
    h2 {
      font-size: 5rem;
      font-weight: 900;
      margin: 0;
    }
    p {
      font-size: 2.5rem;
      margin: 0;
    }
  }
`;

const Blob = styled.div<{ leftPos: string; topPos: string; blobTranslate?: string }>`
  @media (min-width: 1024px) {
    width: 400px;
    position: absolute;
    left: ${(props) => props.leftPos};
    top: ${(props) => props.topPos};
    transform: translate(${({ blobTranslate }) => blobTranslate || '0%, 0%'});
    opacity: 0.5;
    aspect-ratio: 1/1;
    animation: ${animate} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards;
    filter: blur(40px);
    z-index: 1;
    background: linear-gradient(
      47deg,
      rgba(255, 88, 139, 1) 21%,
      rgb(0 164 173) 67%,
      rgba(118, 74, 166, 1) 81%
    );
  }
`;

export { FirstSection, HeaderContainer, Blob };
