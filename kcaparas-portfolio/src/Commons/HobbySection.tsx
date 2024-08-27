import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Mic from '../Assets/mic.png';
import PSP from '../Assets/psp.png';
import Television from '../Assets/Television.png';
import Button from './Button';
import {
  Section,
  HeaderContainer,
  HobbyImage,
  RightView,
  ButtonHolder,
} from './Styled-Commons/HobbySection';

type SectionProps = {
  isDarkMode: boolean;
};

type ImageInfo = {
  id: number;
  src: string;
  alt: string;
  initialTop: string;
  initialLeft: string;
  initialRotate: string;
  imgTitle: string;
  imgDescription: string;
};

const HobbySectionComponent: FC<SectionProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images: ImageInfo[] = [
    {
      id: 0,
      src: Mic,
      alt: 'mic',
      initialTop: '15%',
      initialLeft: '10%',
      initialRotate: '20deg',
      imgTitle: 'Karaoke',
      imgDescription:
        'I won`t brag but a lot of people say that my voice is great. If you want I can imitate Michael Jackson. HEEHEE! But anyways, singing is always a hobby of mine. May it be in the shower, in the Karaoke club, or even at the house with my wife. We actually have a karaoke machine at our house, and my wife will bug me to sing something she really liked.',
    },
    {
      id: 1,
      src: PSP,
      alt: 'PSP',
      initialTop: '55%',
      initialLeft: '45%',
      initialRotate: '0deg',
      imgTitle: 'Playing Video Games',
      imgDescription:
        'I `was` a gamer. I really liked gaming, but adulting hit me so hard. So here I am coding, spending time with my wife. I mean, I still hold a computer so no loss gained right?',
    },
    {
      id: 2,
      src: Television,
      alt: 'TV',
      initialTop: '15%',
      initialLeft: '70%',
      initialRotate: '-20deg',
      imgTitle: 'Watching Televison',
      imgDescription:
        'I mostly watched Anime and a bit of Netflix with my Wife. When I`m at work, I watch anime, when I`m at home it really depends. My favorite animes? The mainstream ones, One Piece, Dragon Ball, Grimgar, Tate no Yuusha. I`m not a fan of ecchi animes. I would rarely like something on Netflix. If there is then it`s not a lot.',
    },
  ];

  const handleImageClick = (image: ImageInfo) => {
    setSelectedImage(image);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsExpanded(true);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleGoBack = () => {
    setIsTransitioning(true);
    setIsExpanded(false);
    setTimeout(() => {
      setSelectedImage(null);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <Section
      isDarkMode={isDarkMode}
      ref={ref}
    >
      <HeaderContainer inView={inView && !isExpanded}>
        <h2>I&apos;m fairly simple and love doing these</h2>
      </HeaderContainer>

      {images.map((image) => (
        <HobbyImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          inView={inView}
          isSelected={selectedImage?.src === image.src}
          isExpanded={isExpanded}
          isTransitioning={isTransitioning}
          initialTop={image.initialTop}
          initialLeft={image.initialLeft}
          initialRotate={image.initialRotate}
          onClick={() => !isExpanded && handleImageClick(image)}
        />
      ))}

      {isExpanded && (
        <RightView>
          <h3>{selectedImage?.imgTitle}</h3>
          <p>{selectedImage?.imgDescription}</p>
          <ButtonHolder>
            <Button
              text="Go back"
              type="button"
              isDarkMode={isDarkMode}
              handleClick={handleGoBack}
            />
          </ButtonHolder>
        </RightView>
      )}
    </Section>
  );
};

export default HobbySectionComponent;
