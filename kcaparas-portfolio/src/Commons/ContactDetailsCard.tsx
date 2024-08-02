import {
  StyledContentContainer,
  StyledPictureHolder,
  StyledName,
  StyledPositionHolderContainer,
  StyledSocialsGroupContainer,
} from './Styled-Commons/ContactDetailsCard.styles.';
import portfolioPic from '../public/kent-cropped.png';

const ContactDetailsCard = () => (
  <StyledContentContainer>
    <StyledPictureHolder>
      <img
        src={portfolioPic}
        alt="kent-photo"
      />
    </StyledPictureHolder>
    <StyledName>Kent Hudson Caparas</StyledName>
    <StyledPositionHolderContainer>
      <h4>Full-Stack Developer</h4>
    </StyledPositionHolderContainer>
    <StyledSocialsGroupContainer></StyledSocialsGroupContainer>
  </StyledContentContainer>
);

export default ContactDetailsCard;
