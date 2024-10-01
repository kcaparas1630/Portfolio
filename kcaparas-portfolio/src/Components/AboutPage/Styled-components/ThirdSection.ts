import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
  isHeaderVisible?: boolean;
};

const ThirdSection = styled(motion.section)<SectionProps>`
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
  min-height: 150vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    min-height: 300vh;
    padding-bottom: 20vh;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const HeaderContainer = styled(motion.div)<SectionProps>`
  display: flex;
  position: sticky;
  top: ${(props) => (props.isHeaderVisible ? '12vh' : '5vh')};
  width: 100%;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    text-align: center;
  }

  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  @media (min-width: 1024px) {
    position: sticky;
    top: 15vh;
    h2 {
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0;
      text-align: center;
    }
  }
`;
const ImageContainer = styled(motion.div)`
  display: none;
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 80vh;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  filter: drop-shadow(12px 6px 9px #2e2e2e);
`;

const SkillDescContainer = styled(motion.div)<SectionProps>`
  width: 95%;
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: sticky;
  top: ${(props) => (props.isHeaderVisible ? '22vh' : '15vh')};
  margin-bottom: 24px;
  padding: 12px 0 0 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  h3 {
    display: none;
  }

  h4 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 700;
  }
  img {
    width: 15%;
    height: 15%;
  }

  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  @media (min-width: 1024px) {
    width: 15%;
    min-height: 600px;
    position: sticky;
    left: 2vw;
    top: 25vh;
    padding: 24px 24px 0 24px;
    h3 {
      font-size: 1.5rem;
      margin: 0;
      font-weight: 700;
    }

    h4 {
      font-size: 1.05rem;
      margin: 0;
      font-weight: 700;
    }
    img {
      width: 20%;
      height: 20%;
    }
    transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
    opacity: ${(props) => (props.inView ? '1' : '0')};
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }
`;

const SkillDescriptionTab = styled.div`
  width: 90%;
  height: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    height: 50px;
    h4 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
const SkillDescription = styled(motion.p)`
  width: 85%;
  font-size: 0.75rem;
  line-height: 1.3;

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

export {
  ThirdSection,
  SectionContainer,
  HeaderContainer,
  StyledImage,
  ImageContainer,
  SkillDescContainer,
  SkillDescription,
  SkillDescriptionTab,
};
