import { useState } from 'react';
import StyledView from './Views/ViewStyles';
import { DesktopContainer, MobileContainer } from './Views/About';
import Header from './Commons/Header';
import FirstSection from './Commons/FirstSection';
import DesktopDesignationSection from './Commons/DesktopDesignationSection';
import MobileDesignationSectionComponent from './Commons/MobileDesignationSection';
import DesktopThirdSection from './Commons/ThirdSection';

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
      <DesktopContainer>
        <DesktopDesignationSection isDarkMode={isDarkMode} />
        <DesktopThirdSection isDarkMode={isDarkMode} />
      </DesktopContainer>
      <MobileContainer>
        <MobileDesignationSectionComponent isDarkMode={isDarkMode} />
      </MobileContainer>
    </StyledView>
  );
};

export default AboutComponent;
