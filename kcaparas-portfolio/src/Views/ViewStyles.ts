import styled from '@emotion/styled';

type ViewProps = {
  isDarkMode: boolean;
};
const StyledView = styled.div<ViewProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => (props.isDarkMode ? '#1c1c22' : '#fbf6e2')};
  background-image: linear-gradient(
      ${(props) => (props.isDarkMode ? 'rgba(251, 246, 226, 0.1)' : 'rgba(19, 24, 66, 0.1)')} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${(props) => (props.isDarkMode ? 'rgba(251, 246, 226, 0.1)' : 'rgba(19, 24, 66, 0.1)')} 1px,
      transparent 1px
    );
  background-size: 50px 50px;

  width: 100%;
  min-height: 100vh;
  transition: background-color 0.5s ease;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const ConstructionSection = styled.div<ViewProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-top: 50vh;
  margin-left: 35vw;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};

  h1 {
    font-size: 2rem;
  }
`;

export { StyledView, ConstructionSection };
