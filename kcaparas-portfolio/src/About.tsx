import { useState, useEffect, useCallback } from 'react';
import StyledView from './Views/ViewStyles';
import { DesktopContainer, MobileContainer } from './Views/About';
import Header from './Commons/Header';
import FirstSection from './Components/AboutPage/FirstSection';
import DesktopDesignationSection from './Components/AboutPage/DesktopDesignationSection';
import MobileDesignationSectionComponent from './Components/AboutPage/MobileDesignationSection';
import DesktopThirdSection from './Components/AboutPage/DesktopThirdSection';
import MobileThirdSection from './Components/AboutPage/MobileThirdSection';
import HobbySectionComponent from './Components/AboutPage/HobbySection';
import LinkSectionComponent from './Components/AboutPage/LinkSection';

const AboutComponent = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true',
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const scrollHeader = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);
    // trigger if scrolling goes beyond 10px
    if (scrollDelta > 10) {
      // going up
      if (scrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
        // going down
      } else {
        setIsHeaderVisible(true);
      }
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [scrollHeader]);

  return (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        isHeaderVisible={isHeaderVisible}
      />
      <FirstSection isDarkMode={isDarkMode} />
      <DesktopContainer>
        <DesktopDesignationSection isDarkMode={isDarkMode} />
        <DesktopThirdSection isDarkMode={isDarkMode} />
      </DesktopContainer>
      <MobileContainer>
        <MobileDesignationSectionComponent isDarkMode={isDarkMode} />
        <MobileThirdSection
          isHeaderVisible={isHeaderVisible}
          isDarkMode={isDarkMode}
        />
      </MobileContainer>
      <HobbySectionComponent isDarkMode={isDarkMode} />
      <LinkSectionComponent isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default AboutComponent;
