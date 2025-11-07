import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import BoxReveal from '../../Animation/Box-Reveal';
import KentPicture from '../../Assets/KCaparas.png';
import ComponentProps from '../../Types/ComponentProps';
import IconButton from '../../Commons/IconButton';
import IconTextButton from '../../Commons/IconTextButton';

import {
  BannerView,
  BannerPersonPoseImage,
  BannerPersonHeader,
  BannerDesignation,
  BannerTextContainer,
  IconContainer,
} from './Styled-components/Bannerv2';

const Banner: FC<ComponentProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });
  return (
    <BannerView
      isDarkMode={isDarkMode}
      ref={ref}
    >
      <BannerPersonPoseImage
        src={KentPicture}
        alt="Kent Caparas Pose"
        initial={{ y: '100%', opacity: 0 }}
        animate={
          inView
            ? { y: 0, opacity: 0.8, rotate: 0, scale: 1 }
            : { y: 0, opacity: 0.6, rotate: 15, scale: 0.8 }
        }
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <BannerTextContainer
        animate={
          inView
            ? { x: 0, rotate: 0, opacity: 1, scale: 1 }
            : { y: '-100%', opacity: 0, scale: 0.6 }
        }
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <BoxReveal
          boxColor="#e68369"
          duration={0.5}
        >
          <BannerPersonHeader>Kent Hudson Caparas</BannerPersonHeader>
        </BoxReveal>
        <BoxReveal
          boxColor="#e68369"
          duration={0.5}
        >
          <BannerDesignation isDarkMode={isDarkMode}>Full-Stack Developer</BannerDesignation>
        </BoxReveal>
        <BoxReveal
          boxColor="#e68369"
          duration={0.5}
        >
          <BannerDesignation isDarkMode={isDarkMode}>Portfolio currently getting revamped!</BannerDesignation>
        </BoxReveal>
        <BoxReveal
          boxColor="#e68369"
          duration={0.5}
        >
          <IconContainer>
            <NavLink to="">
              <IconTextButton
                isDarkMode={isDarkMode}
                type="button"
              >
                <span>Download CV</span>
                <FontAwesomeIcon icon={faDownload} />
              </IconTextButton>
            </NavLink>
            <NavLink to="https://github.com/kcaparas1630">
              <IconButton
                isDarkMode={isDarkMode}
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </IconButton>
            </NavLink>
            <NavLink to="https://www.facebook.com/KCaparas16/">
              <IconButton
                isDarkMode={isDarkMode}
                type="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/kcaparas-1630/">
              <IconButton
                isDarkMode={isDarkMode}
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </IconButton>
            </NavLink>
          </IconContainer>
        </BoxReveal>
      </BannerTextContainer>

      {/* <LeftView>
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
          Product Builder | Problem Solver | Tech Enthusiast
        </StyledSummary>
      </BoxReveal>
      <BoxReveal
        boxColor="#e68369"
        duration={0.5}
      >
        <IconContainer>
          <NavLink to="">
            <IconTextButton
              isDarkMode={isDarkMode}
              type="button"
            >
              <span>Download CV</span>
              <FontAwesomeIcon icon={faDownload} />
            </IconTextButton>
          </NavLink>
          <NavLink to="https://github.com/kcaparas1630">
            <IconButton
              isDarkMode={isDarkMode}
              type="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          </NavLink>
          <NavLink to="https://www.facebook.com/Mr.Yosong.Gwapo12/">
            <IconButton
              isDarkMode={isDarkMode}
              type="button"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/kcaparas-1630/">
            <IconButton
              isDarkMode={isDarkMode}
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
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
    </RightView> */}
    </BannerView>
  );
};

export default Banner;
