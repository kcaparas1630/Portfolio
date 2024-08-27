import { useState } from 'react';
import StyledView from './Views/ViewStyles';
import { PreloaderContainer, PreloaderImg } from './Views/About';
import Header from './Commons/Header';
import FirstSection from './Commons/FirstSection';
import PreLoader from './Assets/infinite-spinner.svg';
import TypingAnimation from './Animation/Typing';
import HobbySectionComponent from './Commons/HobbySection';

const AboutComponent = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true',
  );
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  setTimeout(() => setIsPreloaded(true), 1000);

  return !isPreloaded ? (
    <StyledView isDarkMode={isDarkMode}>
      <PreloaderContainer isDarkMode={isDarkMode}>
        <PreloaderImg
          src={PreLoader}
          alt="Loading..."
        />
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white textmode"
          text="Hang Tight. Something great is happening"
        />
      </PreloaderContainer>
    </StyledView>
  ) : (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
      <FirstSection isDarkMode={isDarkMode} />
      <HobbySectionComponent isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default AboutComponent;
