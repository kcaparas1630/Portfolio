import { StyledHeader, StyledList } from './Styles/Header.styles';

const Header = () => (
  <>
    <StyledHeader><a href="http://localhost:5173">Kcaparas</a></StyledHeader>
    <StyledList>
      <li>Home</li>
      <li>Projects</li>
      <li>Contact Me!</li>
    </StyledList>
  </>
);

export default Header;
