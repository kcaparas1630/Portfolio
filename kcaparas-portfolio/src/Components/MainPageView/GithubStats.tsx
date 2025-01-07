import { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AvatarUrl,
  ContributionsContainer,
  GithubStatsContainer,
  IntroductionContainer,
  LanguagesContainer,
  MainStatsContainer,
  StatsContainer,
  StatsHeader2,
  LanguagesRow,
} from './Styled-components/GithubStats';
import ComponentProps from '../../Types/ComponentProps';
import GithubStatsInterface from '../../Interface/GithubStats';
import {
  getUserStats,
  getCommitCount,
  getLanguages,
  getTotalIssues,
  getContributionsCount,
} from '../../../api/GithubStats';

const GITHUBUSERNAME: string = 'kcaparas1630';

const GithubStats: FC<ComponentProps> = ({ isDarkMode }) => {
  const [userStats, setUserStats] = useState<GithubStatsInterface | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userStatsResponse = await getUserStats(GITHUBUSERNAME);
        console.log(userStatsResponse);
        const userLanguages = await getLanguages(GITHUBUSERNAME);
        const userCommits = await getCommitCount(GITHUBUSERNAME);
        const userPRCount = await getTotalIssues(GITHUBUSERNAME, 'pr', 'GITHUBPR');
        const userIssuesCount = await getTotalIssues(GITHUBUSERNAME, 'issue', 'GITHUBISSUE');
        const iterator = userLanguages.keys();
        const fetchedLanguages = Array.from(iterator).slice(0, 5);
        const userObject: GithubStatsInterface = {
          avatar_url: userStatsResponse.avatar_url,
          name: userStatsResponse.name,
          languages: fetchedLanguages,
          commitCount: userCommits,
          PRCount: userPRCount,
          issueCount: userIssuesCount,
        };
        setUserStats(userObject);
      } catch (error) {
        console.error('Something went wrong.');
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <GithubStatsContainer
      isDarkMode={isDarkMode}
      ref={ref}
    >
      <StatsHeader2
        isDarkMode={isDarkMode}
        inView={inView}
      >
        Github Stats Tracker
      </StatsHeader2>
      {userStats && (
        <StatsContainer>
          <IntroductionContainer>
            <AvatarUrl
              src={userStats.avatar_url}
              alt="Github Avatar"
            />
            <p>{userStats.name}</p>
          </IntroductionContainer>
          <MainStatsContainer>
            <ContributionsContainer>
              <p>{`${userStats.name}' Github Stats:`}</p>
              <p>
                Github Commits:
                {userStats.commitCount}
              </p>
              <p>
                Github Pull Requests:
                {userStats.PRCount}
              </p>
              <p>
                Github Issues:
                {userStats.issueCount}
              </p>
            </ContributionsContainer>
            <LanguagesContainer>
              <h2>Top 5 languages</h2>
              <LanguagesRow>
                {userStats.languages.map((language) => (
                  <div key={language}>
                    <i
                      className={`devicon-${language.toString().toLowerCase()}-plain`}
                      style={{ fontSize: '2rem' }}
                    />
                    <p>{language}</p>
                  </div>
                ))}
              </LanguagesRow>
            </LanguagesContainer>
          </MainStatsContainer>
        </StatsContainer>
      )}
    </GithubStatsContainer>
  );
};

export default GithubStats;
