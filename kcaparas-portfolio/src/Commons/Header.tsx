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
}
const Header: FC<HeaderProps> = ({ isDarkMode, setDarkMode }) => {
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
    >
      <h2>
        <NavLink to="/">Kcaparas</NavLink>
      </h2>
      <StyledIconButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isMenuOpen} isDarkMode={isDarkMode}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </HamburgerIcon>
      </StyledIconButton>
      <StyledUl isOpen={isMenuOpen}>
        <StyledListItem>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Projects
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </StyledListItem>
      </StyledUl>
      <StyledIconButton
        type="button"
        isDarkMode={isDarkMode}
        onClick={toggleModeWrapper}
      >
        <FontAwesomeIcon icon={faMoon} />
      </StyledIconButton>
    </StyledHeader>
  );
};

export default Header;
