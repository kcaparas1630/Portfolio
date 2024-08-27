import { FC } from 'react';
import { FirstSection, HeaderContainer } from './Styled-Commons/FirstSection';

type FirstSectionProps = {
  isDarkMode: boolean;
};

const FirstSectionComponent: FC<FirstSectionProps> = ({ isDarkMode }) => (
  <FirstSection isDarkMode={isDarkMode}>
    <HeaderContainer>
      <h2>01</h2>
      <h2>About me</h2>
    </HeaderContainer>
  </FirstSection>
);

export default FirstSectionComponent;
