import { FC } from 'react';
import BoxReveal from '../Animation/Box-Reveal';
import Picture from '../Assets/kent-cropped.webp';
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
  ButtonContainer,
} from './Styled-Commons/Banner';
import Button from './Button';

interface BannerProps {
  isDarkMode: boolean;
}

const Banner: FC<BannerProps> = ({ isDarkMode }) => (
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
        <ButtonContainer>
          <Button
            type="button"
            text="Hire me!"
            isDarkMode={isDarkMode}
          />
        </ButtonContainer>
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
