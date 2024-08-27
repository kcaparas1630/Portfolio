import { FC, useState, useCallback, useEffect } from 'react';
import { FirstSection, HeaderContainer, ArrowDown } from './Styled-Commons/FirstSection';
import arrowDownBlack from '../Assets/down-arrow-black.png';
import arrowDownWhite from '../Assets/down-arrow-white.png';

type FirstSectionProps = {
  isDarkMode: boolean;
};

const FirstSectionComponent: FC<FirstSectionProps> = ({ isDarkMode }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hideArrow, setHideArrow] = useState<boolean>(false);
  const ScrollArrowDown = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setHideArrow(true);
    } else {
      setHideArrow(false);
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', ScrollArrowDown);
    return () => {
      window.removeEventListener('scroll', ScrollArrowDown);
    };
  }, [ScrollArrowDown]);

  return (
    <FirstSection isDarkMode={isDarkMode}>
      <HeaderContainer>
        <h2>A day in the life of Kent Caparas</h2>
      </HeaderContainer>
      <ArrowDown src={isDarkMode ? arrowDownWhite : arrowDownBlack} alt="arrow-down" isHidden={hideArrow} />
    </FirstSection>
  );
};
export default FirstSectionComponent;
