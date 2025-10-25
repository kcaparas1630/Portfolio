import { FC, PropsWithChildren } from 'react';
import StyledIconButton from './Styled-Commons/IconButton';
import ComponentProps from '../Types/ComponentProps';

interface IconButtonType extends ComponentProps {
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

const IconButton: FC<PropsWithChildren<IconButtonType>> = ({
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
    <StyledIconButton
      type={type}
      onClick={handleClickWrapper}
      isDarkMode={isDarkMode}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
