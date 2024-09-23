import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { HobbySection, HeaderContainer } from './Styled-Commons/HobbySection';
import ComponentProps from '../Types/ComponentProps';

const HobbySectionComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <HobbySection ref={ref} isDarkMode={isDarkMode}>
      <HeaderContainer inView={inView}>
        <h2>Kent&apos;s Hobbies</h2>
      </HeaderContainer>
    </HobbySection>
  );
};
export default HobbySectionComponent;
