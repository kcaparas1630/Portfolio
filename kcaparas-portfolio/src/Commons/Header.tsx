import { Dispatch, FC, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  StyledHeader,
  StyledUl,
  StyledListItem,
  StyledIconButton,
  HamburgerIcon,
} from './Styled-Commons/Header';

interface HeaderProps {
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isHeaderVisible?: boolean;
}
const Header: FC<HeaderProps> = ({ isDarkMode, setDarkMode, isHeaderVisible = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleModeWrapper = () => {
    setDarkMode(!isDarkMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader
      isDarkMode={isDarkMode}
      isOpen={isMenuOpen}
      isHeaderVisible={isHeaderVisible}
    >
      <h2>
        <NavLink to="/">Kcaparas</NavLink>
      </h2>
      <HamburgerIcon
        type="button"
        onClick={toggleMenu}
        isOpen={isMenuOpen}
        isDarkMode={isDarkMode}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </HamburgerIcon>
      <StyledUl
        isDarkMode={isDarkMode}
        isOpen={isMenuOpen}
      >
        <StyledListItem isDarkMode={isDarkMode}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onMouseEnter={(e) => e.currentTarget.style.setProperty('color', 'var(--accent-color)', 'important')}
            onMouseLeave={(e) => e.currentTarget.style.removeProperty('color')}
          >
            Home
          </NavLink>
        </StyledListItem>
        <StyledListItem isDarkMode={isDarkMode}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onMouseEnter={(e) => e.currentTarget.style.setProperty('color', 'var(--accent-color)', 'important')}
            onMouseLeave={(e) => e.currentTarget.style.removeProperty('color')}
          >
            About
          </NavLink>
        </StyledListItem>
        <StyledListItem isDarkMode={isDarkMode}>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onMouseEnter={(e) => e.currentTarget.style.setProperty('color', 'var(--accent-color)', 'important')}
            onMouseLeave={(e) => e.currentTarget.style.removeProperty('color')}
          >
            Projects
          </NavLink>
        </StyledListItem>
        <StyledListItem isDarkMode={isDarkMode}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onMouseEnter={(e) => e.currentTarget.style.setProperty('color', 'var(--accent-color)', 'important')}
            onMouseLeave={(e) => e.currentTarget.style.removeProperty('color')}
          >
            Contact
          </NavLink>
        </StyledListItem>
        <StyledIconButton
          type="button"
          isDarkMode={isDarkMode}
          isMobile
          onClick={toggleModeWrapper}
        >
          <FontAwesomeIcon icon={faMoon} />
        </StyledIconButton>
      </StyledUl>
      <StyledIconButton
        type="button"
        isDarkMode={isDarkMode}
        isMobile={false}
        onClick={toggleModeWrapper}
      >
        <FontAwesomeIcon icon={faMoon} />
      </StyledIconButton>
    </StyledHeader>
  );
};

export default Header;
