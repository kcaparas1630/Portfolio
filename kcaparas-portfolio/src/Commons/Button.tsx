import { FC } from 'react';
import { OuterButton, InnerButton, GradientBackground } from './Styled-Commons/Button';
import ComponentProps from '../Types/ComponentProps';

interface ButtonType extends ComponentProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}
const Button: FC<ButtonType> = ({ text, type = 'button', isDarkMode, handleClick }) => {
  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <OuterButton
      type={type}
      onClick={handleClickWrapper}
    >
      <GradientBackground />
      <InnerButton isDarkMode={isDarkMode}>{text}</InnerButton>
    </OuterButton>
  );
};

export default Button;
