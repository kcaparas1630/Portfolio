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
  UserNameH3,
  HeaderH4,
  HeaderH5,
  GithubItems,
  LanguageItem,
  StatsChangeParagraph,
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
        const userLanguages = await getLanguages(GITHUBUSERNAME);
        const userCommits = await getCommitCount(GITHUBUSERNAME);
        const userContributions = await getContributionsCount(GITHUBUSERNAME);
        console.log(userContributions);
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
      <StatsChangeParagraph isDarkMode={isDarkMode} inView={inView}>
        This is a simple Github Stats Tracker that I created using React, Typescript, and
        emotion.sh. Changes in the data are made by fetching from the Github API. It will change
        after branch is merged to main.
      </StatsChangeParagraph>
      {userStats && (
        <StatsContainer>
          <IntroductionContainer
            isDarkMode={isDarkMode}
            inView={inView}
          >
            <AvatarUrl
              src={userStats.avatar_url}
              alt="Github Avatar"
            />
            <UserNameH3>{userStats.name}</UserNameH3>
          </IntroductionContainer>
          <MainStatsContainer>
            <ContributionsContainer
              isDarkMode={isDarkMode}
              inView={inView}
            >
              <HeaderH4>{`${userStats.name}' Github Stats:`}</HeaderH4>
              <GithubItems>
                <span>Github Commits:</span>
                <span>{userStats.commitCount}</span>
              </GithubItems>
              <GithubItems>
                <span>Github Pull Requests:</span>
                <span>{userStats.PRCount}</span>
              </GithubItems>
              <GithubItems>
                <span>Github Issues:</span>
                <span>{userStats.issueCount}</span>
              </GithubItems>
            </ContributionsContainer>
            <LanguagesContainer
              isDarkMode={isDarkMode}
              inView={inView}
            >
              <HeaderH4>Top 5 languages:</HeaderH4>
              <LanguagesRow>
                {userStats.languages.map((language) => (
                  <LanguageItem key={language}>
                    <i
                      className={`devicon-${language.toString().toLowerCase()}-plain`}
                      style={{ fontSize: '2rem' }}
                    />
                    <GithubItems>{language}</GithubItems>
                  </LanguageItem>
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
