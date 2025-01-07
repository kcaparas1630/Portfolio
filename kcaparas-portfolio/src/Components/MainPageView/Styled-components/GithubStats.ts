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
const IntroductionContainer = styled.div`
  label: IntroductionContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-bottom: 24px;
`;

const MainStatsContainer = styled.div`
  label: MainStatsContainer;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
`;

const ContributionsContainer = styled.div`
  label: ContributionsContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin-left: 20%;
`;

const LanguagesContainer = styled.div`
  label: LanguagesContainer;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
`;
const LanguagesRow = styled.div`
  label: LanguagesRow;
  display: flex;
  gap: 24px;
  width: 100%;
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
};
