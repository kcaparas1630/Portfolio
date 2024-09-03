import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};
const Section = styled.section<SectionProps>`
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    margin-top: 30vh;
  }
`;
const SectionContainer = styled.div`
  min-height: 400vh;
  width: 100vw;
  @media (min-width: 1024px) {
    min-height: 300vh;
  }
`;

const HeaderContainer = styled(motion.div)<SectionProps>`
  display: flex;
  position: sticky;
  top: 20vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    text-align: center;
  }

  @media (min-width: 1024px) {
    top: 40vh;
    h2 {
      font-size: 5rem;
      font-weight: 900;
      margin: 0;
      text-align: center;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  img {
    width: 90%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-left: 25px;  
  }
`;

export { Section, HeaderContainer, SectionContainer, ImageContainer };
