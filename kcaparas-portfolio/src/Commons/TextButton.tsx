import { FC, PropsWithChildren } from 'react';
import StyledTextButton from './Styled-Commons/TextButton';
import ComponentProps from '../Types/ComponentProps';

interface TextButtonType extends ComponentProps {
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

const TextButton: FC<PropsWithChildren<TextButtonType>> = ({
  children,
  type = 'button',
  isDarkMode,
  handleClick,
}) => {
  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <StyledTextButton
      type={type}
      onClick={handleClickWrapper}
      isDarkMode={isDarkMode}
    >
      {children}
    </StyledTextButton>
  );
};

export default TextButton;
