import { Dispatch, FC, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, StyledUl, StyledListItem, StyledIconButton } from './Styled-Commons/Header';

interface HeaderProps {
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const Header: FC<HeaderProps> = ({ isDarkMode, setDarkMode }) => {
  const clickWrapper = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <h2>
        <NavLink to="/">Kcaparas</NavLink>
      </h2>
      <StyledUl>
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
        onClick={clickWrapper}
      >
        <FontAwesomeIcon icon={faMoon} />
      </StyledIconButton>
    </StyledHeader>
  );
};

export default Header;
