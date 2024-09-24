import styled from '@emotion/styled';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const LinkSection = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
`;

const Text = styled.h3<SectionProps>`
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
   transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;

export { LinkSection, Text };
