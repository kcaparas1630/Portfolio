import { useState } from 'react';
import StyledView from './Views/ViewStyles';
import { DesktopDesignationContainer, MobileDesignationContainer } from './Views/About';
import Header from './Commons/Header';
import FirstSection from './Commons/FirstSection';
import DesktopDesignationSection from './Commons/DesktopDesignationSection';
import MobileDesignationSectionComponent from './Commons/MobileDesignationSection';
import ThirdSectionComponent from './Commons/ThirdSection';

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
      <DesktopDesignationContainer>
        <DesktopDesignationSection isDarkMode={isDarkMode} />
      </DesktopDesignationContainer>
      <MobileDesignationContainer>
        <MobileDesignationSectionComponent isDarkMode={isDarkMode} />
      </MobileDesignationContainer>
      <ThirdSectionComponent isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default AboutComponent;
