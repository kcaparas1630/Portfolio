import { FC } from 'react';
import { OuterButton, InnerButton, GradientBackground } from './Styled-Commons/Button';

interface ButtonType {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isDarkMode: boolean;
}
const Button: FC<ButtonType> = ({ text, type = 'button', isDarkMode }) => (
  <OuterButton type={type}>
    <GradientBackground />
    <InnerButton isDarkMode={isDarkMode}>{text}</InnerButton>
  </OuterButton>
);

export default Button;
