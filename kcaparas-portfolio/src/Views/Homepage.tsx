import { useState, useEffect } from 'react';
import Header from '../Commons/Header';
import StyledView from './Homepage.styles';
import Banner from '../Commons/Banner';

const Homepage = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
      <Banner isDarkMode={isDarkMode} />
    </StyledView>
  );
};

export default Homepage;
