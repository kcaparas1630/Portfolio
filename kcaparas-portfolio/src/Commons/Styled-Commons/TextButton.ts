import styled from '@emotion/styled';

type StyledButtonProps = {
  isDarkMode?: boolean;
}

const StyledTextButton = styled.button<StyledButtonProps>`
  label: StyledTextButton;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: transparent;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-weight: 700;
  border: 3px solid #e68369;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e68369;

    }
`;

export default StyledTextButton;
