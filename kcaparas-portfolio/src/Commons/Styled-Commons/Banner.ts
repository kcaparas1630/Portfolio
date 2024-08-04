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

const BannerView = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;
const LeftView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 0 50px;
    width: 50%;
  }
`;
const RightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 0 50px;
    width: 50%;
  }
`;
const StyledGreetings = styled.h2<BannerProps>`
  display: flex;
  font-size: 28px;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  margin: 0;
`;
const StyledName = styled.h1<BannerProps>`
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  font-size: 48px;
  font-weight: 700;
`;
const StyledDesignation = styled.h2<BannerProps>`
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  margin: 0;
`;
const StyledSummary = styled.p<BannerProps>`
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  margin-top: 40px;
  width: 70%;
  line-height: 1.5;
  text-align: justify;
`;

const BottomDiv = styled.div`
  display: flex;
  background-color: #e68369;
  width: 50%;
  height: 500px;
  position: relative;
  border-radius: 10%;
  animation: ${zoomIn} 1.5s ease-in-out forwards;
  transition: transform 0.3s ease-in-out;
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
    transition: transform 0.3s ease-in-out;
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
};
