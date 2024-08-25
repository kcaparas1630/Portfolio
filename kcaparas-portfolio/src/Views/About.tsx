import { useState } from 'react';
import StyledView from './ViewStyles';
import Header from '../Commons/Header';
import FirstSectionComponent from '../Commons/About/FirstSection';

const About = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true',
  );

  return (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
      <FirstSectionComponent isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default About;
