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
    min-height: 150vh;
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

const SkillList = styled.div`
  height: 100%;
  width: 15%;
  position: sticky;
  top: 25vh;
  left: 95vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SkillItem = styled.div<SectionProps>`
  width: 100%;
  height: 100%;
  max-width: 100px;
  min-height: 100px;
  padding: 12px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillDescContainer = styled.div`
  width: 30%;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 2vw;
  top: 25vh;
  padding: 24px 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const SkillDescription = styled.div<SectionProps>`
  width: 30%;
  height: 100%;
`;

export {
  ThirdSection,
  SectionContainer,
  HeaderContainer,
  StyledImage,
  ImageContainer,
  SkillList,
  SkillItem,
  SkillDescContainer,
  SkillDescription,
};
