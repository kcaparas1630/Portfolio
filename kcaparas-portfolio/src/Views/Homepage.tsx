import { useState } from 'react';
import Header from '../Commons/Header';
import StyledView from './Homepage.styles';
import Banner from '../Commons/Banner';

const Homepage = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
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
