import styled from '@emotion/styled';

type StyledButtonProps = {
  isDarkMode?: boolean;
}

const StyledIconTextButton = styled.button<StyledButtonProps>`
  label: StyledIconTextButton;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  background-color: transparent;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 0.875rem;
  font-weight: 700;
  border: 3px solid #e68369;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #e68369;
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    gap: 8px;
  }
`;

export default StyledIconTextButton;
