import styled from '@emotion/styled';

type GithubType = {
  isDarkMode: boolean;
  inView?: boolean;
};

const GithubStatsContainer = styled.section<GithubType>`
  label: GithubStatsContainer;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding-top: 24px;
  background-color: ${(props) => (props.isDarkMode ? '#1C225F' : '#131842')};

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
  color: white;
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
  padding: 24px;
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

const UserNameH3 = styled.h3`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

const HeaderH4 = styled.h4`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const HeaderH5 = styled.h5`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const GithubItems = styled.p`
  color: white;
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
`;

const MainStatsContainer = styled.div`
  label: MainStatsContainer;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
`;

const ContributionsContainer = styled.div<GithubType>`
  label: ContributionsContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin-left: 20%;
  gap: 24px;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
  transition-delay: 0.5s;
`;

const LanguagesContainer = styled.div<GithubType>`
  label: LanguagesContainer;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
  transition-delay: 0.5s;
`;
const LanguagesRow = styled.div`
  label: LanguagesRow;
  display: flex;
  gap: 24px;
  width: 100%;
`;
const LanguageItem = styled.div`
  label: LanguageItem;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    color: white;
  }
`;
const AvatarUrl = styled.img`
  width: 10%;
  height: 100%;
  border-radius: 5%;
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
};
