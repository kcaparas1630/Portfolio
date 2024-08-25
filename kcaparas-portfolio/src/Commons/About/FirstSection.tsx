import { FC, useEffect, useRef } from 'react';
import { FirstSection, HeaderContainer, Parachute } from '../Styled-Commons/About/FirstSection';
import ParachuteFly from '../../Assets/parachute-flying.png';

type FirstSectionProps = {
  isDarkMode: boolean;
};

const FirstSectionComponent: FC<FirstSectionProps> = ({ isDarkMode }) => {
  const parachuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parachute = parachuteRef.current;
    if (parachute) {
      const interval = setInterval(() => {
        const top = parachute.offsetTop;
        parachute.style.top = `${top + 1}px`;
      }, 50);

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, []);
  return (
    <FirstSection isDarkMode={isDarkMode}>
      <Parachute ref={parachuteRef}>
        <img
          src={ParachuteFly}
          alt="parachute-flying"
        />
      </Parachute>
      <HeaderContainer>
        <h2>01</h2>
        <h2>About me</h2>
      </HeaderContainer>
    </FirstSection>
  );
};

export default FirstSectionComponent;
