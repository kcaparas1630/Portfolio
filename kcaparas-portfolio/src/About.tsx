import React, { useState } from 'react';
import StyledView from './Views/ViewStyles';
import Header from './Commons/Header';
import FirstSection from './Commons/FirstSection';

const AboutComponent = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true',
  );

  return (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
      <FirstSection isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default AboutComponent;
