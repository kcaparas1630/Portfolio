import styled from '@emotion/styled';

type StyledIconProps = {
  isDarkMode?: boolean;
}
const OuterIcon = styled.button`
  position: relative;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  width: 55px;
  height: 55px;
`;

const SolidBackground = styled.div`
  position: absolute;
  inset: 0;
  background: #e68369;
  border-radius: 100%;
  z-index: 1;
`;

const InnerIcon = styled.div<StyledIconProps>`
  position: relative;
  padding: 10px 5px;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  border-radius: 100%;
  z-index: 2;
  font-size: 18px;
  transition: background-color 0.2s ease, border 0.2s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid transparent;
  }
`;

export { OuterIcon, InnerIcon, SolidBackground }; 
