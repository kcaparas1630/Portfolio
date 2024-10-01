import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const HobbySection = styled(motion.section)<SectionProps>`
  min-height: 100vh;
  width: 100%;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5vh 0;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const HeaderContainer = styled(motion.div)<SectionProps>`
  width: 100%;
  margin-bottom: 5vh;

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
    h2 {
      font-size: 5rem;
    }
    p {
      font-size: 2.5rem;
    }
  }
`;

const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const HobbyCard = styled.div<SectionProps>`
  label: HobbyCard;
  border-radius: 5px;
  width: 80%;
  max-height: 600px;
  background-color: ${(props) => (props.isDarkMode ? '#1C225F' : '#131842')};
  color: white;
  box-shadow: 0 4px 8px 0 #e68369;
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 16px;
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
    width: 30%;
    max-height: 500px;

    img {
      object-fit: scale-down;
    }
  }
`;

const DescriptionContainer = styled.div`
  padding: 0 16px;
`;

export { HobbySection, HeaderContainer, HobbyContainer, HobbyCard, DescriptionContainer };
