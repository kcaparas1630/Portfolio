import styled from '@emotion/styled';

type ViewProps = {
  isDarkMode: boolean;
};
const StyledView = styled.div<ViewProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) =>
    props.isDarkMode ? 'var(--native-dark-transparent-color)' : '#fbf6e2'};
  width: 100vw;
  height: 100%;
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
