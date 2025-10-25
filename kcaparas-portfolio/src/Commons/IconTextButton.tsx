import { FC, PropsWithChildren } from 'react';
import StyledIconTextButton from './Styled-Commons/IconTextButton';
import ComponentProps from '../Types/ComponentProps';

interface IconTextButtonType extends ComponentProps {
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

const IconTextButton: FC<PropsWithChildren<IconTextButtonType>> = ({
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
    <StyledIconTextButton
      type={type}
      onClick={handleClickWrapper}
      isDarkMode={isDarkMode}
    >
      {children}
    </StyledIconTextButton>
  );
};

export default IconTextButton;
