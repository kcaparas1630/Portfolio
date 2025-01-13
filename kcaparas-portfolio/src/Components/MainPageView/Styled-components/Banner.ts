import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

type BannerProps = {
  isDarkMode?: boolean;
};

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const BannerView = styled.section<BannerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => (props.isDarkMode ? 'var(--native-dark-bg-color)' : '#fbf6e2')};
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? '#fbf6e2' : 'var(--native-dark-bg-color)')};
  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;
const LeftView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px 0;

  @media (min-width: 768px) {
    height: auto;
    align-items: flex-start;
    padding: 0 50px;
    width: 50%;
  }
`;
const RightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px 0;

  @media (min-width: 768px) {
    height: auto;
    padding: 0 50px;
    width: 50%;
  }
`;
const StyledGreetings = styled.h2<BannerProps>`
  display: flex;
  font-size: 28px;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  opacity: 0.8;
  margin: 0;
`;
const StyledName = styled.h1<BannerProps>`
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;
const StyledDesignation = styled.h2<BannerProps>`
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  opacity: 0.8;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
const StyledSummary = styled.p<BannerProps>`
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  text-decoration: none;
  margin: auto;
  width: 80%;
  line-height: 1.5;
  text-align: justify;
  opacity: 0.8;

  a {
    text-decoration: underline;
    color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
    opacity: 1;
    
    &:hover {
      color: #e68369;
      transition: color 0.5s ease;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    margin: 24px 0;
  }
`;


const BottomDiv = styled.div`
  display: flex;
  background-color: #e68369;
  width: 100%;
  max-width: 250px;
  height: 250px;
  margin-left: 5%;
  position: relative;
  border-radius: 10%;
  animation: ${zoomIn} 1.5s ease-in-out forwards;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    height: 500px;
    max-width: 500px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10%;
    opacity: 1 !important; 
    transition: transform 0.3s ease-in-out;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  gap: 20px;
  margin-top: 25px;

  @media (min-width: 768px) {
    margin-top: 0;
    flex-direction: row;
    width: 100%;
  }
`;

export {
  BannerView,
  LeftView,
  StyledName,
  StyledGreetings,
  StyledDesignation,
  StyledSummary,
  RightView,
  BottomDiv,
  TopDiv,
  IconContainer,
};
