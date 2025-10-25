import { FC, PropsWithChildren } from 'react';
import StyledButton from './Styled-Commons/Button';
import ComponentProps from '../Types/ComponentProps';

interface ButtonType extends ComponentProps {
  type: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}
const Button: FC<PropsWithChildren<ButtonType>> = ({ children, type = 'button', isDarkMode, handleClick }) => {
  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <StyledButton
      type={type}
      onClick={handleClickWrapper}
      isDarkMode={isDarkMode}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
