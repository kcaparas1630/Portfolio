import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const HobbySection = styled(motion.section)<SectionProps>`
  height: 100vh;
  width: 95vw;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 0;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
  }
`;
const HeaderContainer = styled(motion.div)<SectionProps>`
  position: sticky;
  top: 25vh;
  gap: 24px;
  width: 100%;
  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
    color: #e68369;
  }

  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  @media (min-width: 1024px) {
    top: 10vh;
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

export { HobbySection, HeaderContainer };
