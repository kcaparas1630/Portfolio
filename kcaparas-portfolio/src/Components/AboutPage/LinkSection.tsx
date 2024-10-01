import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { LinkSection, Text, Line, ButtonContainer } from './Styled-components/LinkSection';
import ComponentProps from '../../Types/ComponentProps';
import Button from '../../Commons/Button';
import Resume from '../../Assets/Docs/kent-caparas-resume.pdf';

const LinkSectionComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const downloadResume = () => {
    window.open(Resume);
  };

  return (
    <LinkSection
      ref={ref}
      isDarkMode={isDarkMode}
    >
      <Text inView={inView}>
        You&apos;ve read what I do, and about me, if you inquire to know more about my professional
        skills regarding my line of work. here&apos;s a link to my resume.
      </Text>
      <Line />
      <ButtonContainer>
        <Button
          text="Download Resume"
          type="button"
          isDarkMode={isDarkMode}
          handleClick={downloadResume}
        />
      </ButtonContainer>
    </LinkSection>
  );
};

export default LinkSectionComponent;
