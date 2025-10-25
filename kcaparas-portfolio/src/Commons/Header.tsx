import { Dispatch, FC, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import HeaderMobile from './Header-mobile';
import HeaderDesktop from './Header-Desktop';
import {
  StyledHeader,
  StyledIconButton,
  HamburgerIcon,
} from './Styled-Commons/Header';
import ComponentProps from '../Types/ComponentProps';

interface HeaderProps extends ComponentProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isHeaderVisible?: boolean;
}

const Header: FC<HeaderProps> = ({ isDarkMode, setDarkMode, isHeaderVisible = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleModeWrapper = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsRotating(true);
    toggleModeWrapper();
    setTimeout(() => setIsRotating(false), 1000);
  };

  const menuItems = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <StyledHeader
      isDarkMode={isDarkMode}
      isOpen={isMenuOpen}
      isHeaderVisible={isHeaderVisible}
    >
      <h2>
        <NavLink to="/">Kcaparas</NavLink>
      </h2>
    </StyledHeader>
  );
};

export default Header;
