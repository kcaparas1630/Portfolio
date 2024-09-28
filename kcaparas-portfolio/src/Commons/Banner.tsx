import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { OuterIcon, InnerIcon, SolidBackground } from './Styled-Commons/FontAwesomeIcon';
import BoxReveal from '../Animation/Box-Reveal';
import Picture from '../Assets/kent-cropped.webp';
import ComponentProps from '../Types/ComponentProps';
import {
  BannerView,
  LeftView,
  StyledGreetings,
  StyledName,
  StyledDesignation,
  StyledSummary,
  RightView,
  TopDiv,
  BottomDiv,
  IconContainer,
} from './Styled-Commons/Banner';

const Banner: FC<ComponentProps> = ({ isDarkMode }) => (
  <BannerView>
    <LeftView>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <StyledGreetings isDarkMode={isDarkMode}>Hi it&apos;s me!</StyledGreetings>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
        delayAnim={0.5}
      >
        <StyledName isDarkMode={isDarkMode}>Kent Hudson Caparas</StyledName>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <StyledDesignation isDarkMode={isDarkMode}>Full-Stack Developer</StyledDesignation>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <StyledSummary isDarkMode={isDarkMode}>
          I&apos;m a full-stack developer and a recent graduate of Camosun College. With a passion
          for building innovative and impactful solutions, I&apos;m eager to develop something great
          and contribute to the tech community.
        </StyledSummary>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <StyledSummary isDarkMode={isDarkMode}>
          Want to reach me out and collaborate on some projects? Click the social medias buttons
          below or
          <Link to="/contact">Contact me</Link>
        </StyledSummary>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <IconContainer>
          <NavLink to="https://github.com/kcaparas1630">
            <OuterIcon>
              <SolidBackground />
              <InnerIcon isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faGithub} />
              </InnerIcon>
            </OuterIcon>
          </NavLink>
          <NavLink to="https://www.facebook.com/Mr.Yosong.Gwapo12/">
            <OuterIcon>
              <SolidBackground />
              <InnerIcon isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faFacebook} />
              </InnerIcon>
            </OuterIcon>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/kcaparas-1630/">
            <OuterIcon>
              <SolidBackground />
              <InnerIcon isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faLinkedin} />
              </InnerIcon>
            </OuterIcon>
          </NavLink>
        </IconContainer>
      </BoxReveal>
    </LeftView>
    <RightView>
      <BottomDiv>
        <TopDiv>
          <img
            src={Picture}
            alt="Top Div"
          />
        </TopDiv>
      </BottomDiv>
    </RightView>
  </BannerView>
);

export default Banner;
