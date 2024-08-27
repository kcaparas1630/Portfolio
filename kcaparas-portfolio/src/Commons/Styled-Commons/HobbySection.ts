import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pullUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const Section = styled.section<SectionProps>`
  min-height: 100vh;
  width: 100vw;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeaderContainer = styled.div<SectionProps>`
  display: flex;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;

  h2 {
    font-size: 5rem;
    font-weight: 900;
    margin: 0;
    text-align: center;
  }
`;

interface HobbyImageProps extends SectionProps {
  isSelected: boolean;
  isExpanded: boolean;
  isTransitioning: boolean;
  initialTop: string;
  initialLeft: string;
  initialRotate: string;
}

const HobbyImage = styled.img<HobbyImageProps>`
  width: ${(props) => (props.isExpanded ? '25%' : '15%')};
  position: absolute;
  top: ${(props) => props.initialTop};
  left: ${(props) => props.initialLeft};
  transform: ${(props) =>
    props.isSelected && props.isExpanded
      ? 'translate(-25%, -50%) rotate(0deg)'
      : `translateY(${props.inView ? '0' : '100%'}) rotate(${props.initialRotate})`};
  opacity: ${(props) => {
    if (props.isTransitioning) return '0.5';
    if (props.isSelected && props.isExpanded) return '1';
    if (!props.isExpanded) return props.inView ? '0.8' : '0';
    return '0';
  }};
  transition: all 1s ease-in-out;
  cursor: ${(props) => (props.isExpanded ? 'default' : 'pointer')};

  ${(props) =>
    props.isSelected &&
    props.isExpanded &&
    `
    top: 50%;
    left: 15%;
  `}

  &:hover {
    transform: ${(props) => !props.isExpanded && 'scale(1.1)'};
  }
`;

const RightView = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 24px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  gap: 48px;

  h3 {
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
    animation: ${pullUp} 1s ease;
  }
  p {
    font-size: 1.5rem;
    width: 80%;
    margin: 0;
    line-height: 1.5;
    animation: ${pullUp} 1s ease;
  }
`;

const ButtonHolder = styled.div`
    width: 80%;
    animation: ${pullUp} 1s ease;
`;

export { Section, HeaderContainer, HobbyImage, RightView, ButtonHolder };
