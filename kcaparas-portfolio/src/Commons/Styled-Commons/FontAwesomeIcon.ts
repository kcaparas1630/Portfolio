import styled from '@emotion/styled';

type StyledIconProps = {
  isDarkMode?: boolean;
}
const OuterIcon = styled.button`
  label: OuterIcon;
  position: relative;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  width: 55px;
  height: 55px;
`;

const SolidBackground = styled.div`
  label: SolidBackground;
  position: absolute;
  inset: 0;
  background: #e68369;
  border-radius: 100%;
  z-index: 0;
`;

const InnerIcon = styled.div<StyledIconProps>`
  label: InnerIcon;
  position: relative;
  padding: 10px 5px;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  border-radius: 100%;
  z-index: 1;
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
