import { useState, useEffect, useCallback } from 'react';
import Header from '../Commons/Header';
import StyledView from './ViewStyles';
import Banner from '../Components/MainPageView/Banner';
import Skills from '../Components/MainPageView/Skills';
import Projects from '../Components/MainPageView/Projects';

const Homepage = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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
      <Banner isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default Homepage;
