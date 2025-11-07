import styled from '@emotion/styled';

type StyledButtonProps = {
  isDarkMode?: boolean;
}

const StyledIconButton = styled.button<StyledButtonProps>`
  label: StyledIconButton;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: transparent;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 18px;
  border: 3px solid #e68369;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e68369;
  }
`;

export default StyledIconButton;
