import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type BannerProps = {
  isDarkMode?: boolean;
};

const BannerView = styled(motion.section)<BannerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  border-bottom: 2px solid
    ${(props) => (props.isDarkMode ? '#fbf6e2' : 'var(--native-dark-bg-color)')};
  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

const BannerPersonPoseImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 600px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  left: 50vw;
  translate: -50% 0;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));

  @media (min-width: 768px) {
    max-width: 600px;
    max-height: 850px;
  }
`;

const BannerPersonHeader = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #e68369;
  z-index: 1;
  margin: 0;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const BannerDesignation = styled.h2<BannerProps>`
  font-family: 'Urbanist', sans-serif;
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  opacity: 1;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;

  @media (min-width: 768px) {
    opacity: 0.8;
    font-size: 2rem;
  }
`;

const BannerTextContainer = styled(motion.div)`
  position: absolute;
  bottom: 24px;
  left: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    left: 24px;
    gap: 24px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export {
  BannerView,
  BannerPersonPoseImage,
  BannerPersonHeader,
  BannerDesignation,
  BannerTextContainer,
  IconContainer,
};
