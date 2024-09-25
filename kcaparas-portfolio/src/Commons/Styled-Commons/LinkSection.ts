import styled from '@emotion/styled';

type SectionProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const LinkSection = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 70vh;
  padding: 0 24px;
  gap: 24px;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
`;

const Text = styled.h3<SectionProps>`
  position: sticky;
  top: 10vh;
  font-size: 2.5rem;
  width: 70vw;
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;

const Line = styled.hr`
  width: 50vw;
  margin-left: 0;
`;

const ButtonContainer = styled.div`
    max-width: 250px;
    max-height: 50px;
`;

export { LinkSection, Text, Line, ButtonContainer };
