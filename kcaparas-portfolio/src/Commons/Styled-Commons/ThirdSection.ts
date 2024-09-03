import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type SectionProps = {
  isDarkMode: boolean;
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
  min-height: 400vh;
  width: 100vw;
  @media (min-width: 1024px) {
    min-height: 300vh;
  }
`;

const HeaderContainer = styled(motion.div)`
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
    top: 15vh;
    h2 {
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0;
      text-align: center;
    }
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 80vh;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  filter: drop-shadow(12px 6px 9px #2e2e2e);
`;

const SkillDescContainer = styled.div<SectionProps>`
  width: 15%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: sticky;
  left: 2vw;
  top: 25vh;
  padding: 24px 24px 0 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

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
`;

const SkillDescriptionTab = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const SkillDescription = styled(motion.p)`
  width: 85%;
  font-size: 0.9rem;
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
