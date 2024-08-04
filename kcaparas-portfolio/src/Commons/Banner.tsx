import { FC } from 'react';
import BoxReveal from '../Animation/Box-Reveal';
import {
  BannerView,
  LeftView,
  StyledGreetings,
  StyledName,
  StyledDesignation,
  StyledSummary,
} from './Styled-Commons/Banner';

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
          for building innovative and impactful solutions, I&apos;m is eager to develop something
          great and contribute to the tech community.
        </StyledSummary>
      </BoxReveal>
    </LeftView>
  </BannerView>
);

export default Banner;
