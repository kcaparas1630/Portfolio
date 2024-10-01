import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  HobbySection,
  HeaderContainer,
  HobbyContainer,
  HobbyCard,
  DescriptionContainer,
} from './Styled-components/HobbySection';
import ComponentProps from '../../Types/ComponentProps';
import KaraokePic from '../../Assets/karaoke.jpg';
import BadmintonPic from '../../Assets/badminton.jpg';
import CodingPic from '../../Assets/coding.jpg';

const HobbySectionComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <HobbySection
      ref={ref}
      isDarkMode={isDarkMode}
    >
      <HeaderContainer inView={inView}>
        <h2>Kent&apos;s Hobbies</h2>
      </HeaderContainer>
      <HobbyContainer>
        <HobbyCard
          isDarkMode={isDarkMode}
          inView={inView}
        >
          <img
            src={KaraokePic}
            alt="Karaoke Pic"
          />
          <DescriptionContainer>
            <h4>Karaoke</h4>
            <p>
              Singing karaoke is what I love to do for fun. Me and my wife have a karaoke machine at
              home, that we use when we&apos;re bored. If you&apos;re the same as me, we can always
              do karaoke for fun!
            </p>
          </DescriptionContainer>
        </HobbyCard>
        <HobbyCard
          isDarkMode={isDarkMode}
          inView={inView}
        >
          <img
            src={CodingPic}
            alt="Coding Pic"
          />
          <DescriptionContainer>
            <h4>Coding</h4>
            <p>
              I&apos;ll code anytime of the day. Wherever or whenever. An idea pops in and I start
              visualizing it, then implement it. After this portfolio I have a lot of projects to
              work on so stay tuned!
            </p>
          </DescriptionContainer>
        </HobbyCard>
        <HobbyCard
          isDarkMode={isDarkMode}
          inView={inView}
        >
          <img
            src={BadmintonPic}
            alt="Badminton Pic"
          />
          <DescriptionContainer>
            <h4>Badminton</h4>
            <p>
              Since I sit on a chair all day, this is my method of getting physically active. I
              loved playing badminton ever since I was in highschool. Apparently what drives me more
              to playing this is someday beat my athlete wife in this sport which she&apos;s a
              professional.
            </p>
          </DescriptionContainer>
        </HobbyCard>
      </HobbyContainer>
    </HobbySection>
  );
};
export default HobbySectionComponent;
