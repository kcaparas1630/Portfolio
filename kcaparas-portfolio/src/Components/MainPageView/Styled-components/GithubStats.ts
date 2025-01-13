import styled from '@emotion/styled';

type GithubType = {
  isDarkMode: boolean;
  inView?: boolean;
};

const GithubStatsContainer = styled.section<GithubType>`
  label: GithubStatsContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${(props) => (props.isDarkMode ? 'var(--native-dark-bg-color)' : '#fbf6e2')};
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? '#fbf6e2' : 'var(--native-dark-bg-color)')};

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 80vh;
  }

  @media (min-width: 1024px) {
    min-height: 90vh;
    flex-direction: column;
  }
`;

const StatsHeader2 = styled.h2<GithubType>`
  label: StatsHeader2;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 24px;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  margin: 0;
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
`;

// Stats
const StatsContainer = styled.div`
  label: StatsContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  // padding: 24px;
`;
const IntroductionContainer = styled.div<GithubType>`
  label: IntroductionContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-bottom: 24px;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
`;

const UserNameH3 = styled.h3<GithubType>`
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 2rem;
  font-weight: 700;
`;

const HeaderH4 = styled.h4<GithubType>`
  label: HeaderH4;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeaderH5 = styled.h5<GithubType>`
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const GithubItems = styled.div<GithubType>`
  display: table-row;
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;

  span {
    display: table-cell;
    padding: 8px 8px 8px 0;
  }
`;

const MainStatsContainer = styled.div`
  label: MainStatsContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContributionsContainer = styled.div<GithubType>`
  label: ContributionsContainer;
  display: table;
  width: 90%;
  gap: 24px;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
  transition-delay: 0.5s;

  @media (min-width: 768px) {
    width: 30%;
    margin-left: 20%;
  }
`;

const LanguagesContainer = styled.div<GithubType>`
  label: LanguagesContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
  transition-delay: 0.5s;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const LanguagesRow = styled.div`
  label: LanguagesRow;
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const LanguageItem = styled.div<GithubType>`
  label: LanguageItem;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  }
`;
const AvatarUrl = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 5%;

  @media (min-width: 768px) {
    width: 10%;
  }
`;

const StatsChangeParagraph = styled.p<GithubType>`
  color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
  width: 80%;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.7' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
    width: 50%;
    margin: 24px 0;
  }
`;

export {
  GithubStatsContainer,
  IntroductionContainer,
  StatsContainer,
  MainStatsContainer,
  LanguagesContainer,
  ContributionsContainer,
  AvatarUrl,
  StatsHeader2,
  LanguagesRow,
  UserNameH3,
  HeaderH4,
  HeaderH5,
  GithubItems,
  LanguageItem,
  StatsChangeParagraph,
};
