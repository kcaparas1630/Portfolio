import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { LinkSection, Text, Line } from './Styled-Commons/LinkSection';
import ComponentProps from '../Types/ComponentProps';

const LinkSectionComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
    </LinkSection>
  );
};

export default LinkSectionComponent;
