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
  padding: 0 0 0 24px;
  gap: 24px;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};

  @media (min-width: 1024px) {
    padding: 0 24px;
  }
`;

const Text = styled.h3<SectionProps>`
  position: sticky;
  top: 10vh;
  font-size: 1.5rem;
  width: 80vw;
  margin: 24px 0 0 0;
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  @media (min-width: 1024px) {
    width: 70vw;
    margin: 24px 0;
    font-size: 2.5rem;
  }
`;

const Line = styled.hr`
  width: 80vw;
  margin-left: 0;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const ButtonContainer = styled.div`
  max-width: 80vw;
  max-height: 50px;

  @media (min-width: 1024px) {
    max-width: 250px;
  }
`;

export { LinkSection, Text, Line, ButtonContainer };
