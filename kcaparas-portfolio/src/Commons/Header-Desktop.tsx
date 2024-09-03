import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { StyledUl, StyledIconButton, StyledListItem } from './Styled-Commons/Header';
import MenuVariants from '../Motion-Variants/Menu-Variants';
import mobileLinkVariants from '../Motion-Variants/Mobile-Link-Variants';

type HeaderDesktopProps = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  menuItems: {
    to: string;
    text: string;
  }[];
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModeWrapper: () => void;
};
const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  isDarkMode,
  isMenuOpen,
  menuItems,
  setIsMenuOpen,
  toggleModeWrapper,
}) => (
  <StyledUl
    isDarkMode={isDarkMode}
    isOpen={isMenuOpen}
    variants={MenuVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {menuItems.map((item) => (
      <StyledListItem
        key={item.to}
        isDarkMode={isDarkMode}
        variants={mobileLinkVariants}
      >
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setIsMenuOpen(false)}
          onMouseEnter={(e) =>
            e.currentTarget.style.setProperty('color', 'var(--accent-color)', 'important')
          }
          onMouseLeave={(e) => e.currentTarget.style.removeProperty('color')}
        >
          {item.text}
        </NavLink>
      </StyledListItem>
    ))}
    <StyledListItem
      isDarkMode={isDarkMode}
      variants={mobileLinkVariants}
    >
      <StyledIconButton
        type="button"
        isDarkMode={isDarkMode}
        isMobile
        onClick={toggleModeWrapper}
      >
        <p>{isDarkMode ? 'Dark' : 'Light'}</p>
        <FontAwesomeIcon
          className="icon"
          icon={isDarkMode ? faMoon : faSun}
        />
      </StyledIconButton>
    </StyledListItem>
  </StyledUl>
);

export default HeaderDesktop;
