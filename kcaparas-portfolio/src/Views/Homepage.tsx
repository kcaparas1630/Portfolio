import { useState } from 'react';
import Header from '../Commons/Header';
import StyledView from './Homepage.styles';

const Homepage = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  return (
    <StyledView isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
    </StyledView>
  );
};

export default Homepage;
