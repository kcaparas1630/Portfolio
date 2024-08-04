import styled from '@emotion/styled';

type BannerProps = {
  isDarkMode?: boolean;
};
const BannerView = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
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
export { BannerView, LeftView, StyledName, StyledGreetings, StyledDesignation, StyledSummary };
