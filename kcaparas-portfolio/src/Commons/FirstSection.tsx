import { FC } from 'react';
import { FirstSection, HeaderContainer } from './Styled-Commons/FirstSection';

type FirstSectionProps = {
  isDarkMode: boolean;
};

const FirstSectionComponent: FC<FirstSectionProps> = ({ isDarkMode }) => (
  <FirstSection isDarkMode={isDarkMode}>
    <HeaderContainer>
      <h2>A day in the life of Kent Caparas</h2>
    </HeaderContainer>
  </FirstSection>
);

export default FirstSectionComponent;
