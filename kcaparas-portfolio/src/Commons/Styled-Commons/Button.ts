import styled from '@emotion/styled';

type StyledButtonProps = {
  isDarkMode?: boolean;
}
const OuterButton = styled.button`
  label: OuterButton;
  position: relative;
  padding: 3px;
  border: none;
  background: none;
  cursor: pointer;
  width: 150px;
  height: 40px;
`;

const GradientBackground = styled.div`
  label: GradientBackground;
  position: absolute;
  inset: 0;
  background: #e68369;
  border-radius: 8px;
  z-index: 1;
`;

const InnerButton = styled.div<StyledButtonProps>`
  label: InnerButton;
  position: relative;
  padding: 8px 16px;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  font-weight: 700;
  border-radius: 6px;
  z-index: 2;
  transition: background-color 0.2s ease, border 0.2s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid transparent;
  }
`;

export { OuterButton, InnerButton, GradientBackground }; 
