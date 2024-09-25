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
  flex-direction: column;
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
  position: ${(props) => (props.inView ? 'relative' : 'sticky')};
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
const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;

  width: 100vw;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const HobbyCard = styled.div<SectionProps>`
  label: HobbyCard;
  border-radius: 5px;
  width: 90%;
  padding-bottom: 24px;
  background-color: ${(props) => (props.isDarkMode ? '#1C225F' : '#131842')};
  color: white;
  box-shadow: 0 4px 8px 0 #e68369;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 5px 5px 0 0;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    opacity: 0.8;
  }
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 1s ease,
    box-shadow 0.3s ease-in-out,
    opacity 1s ease;

  @media (min-width: 1024px) {
    width: 20%;
    max-height: 500px;
  }
`;

const DescriptionContainer = styled.div`
  padding: 2px 16px;
`;

export { HobbySection, HeaderContainer, HobbyContainer, HobbyCard, DescriptionContainer };
