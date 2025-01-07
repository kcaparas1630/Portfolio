import { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AvatarUrl,
  GithubStatsContainer,
  StatsContainer,
  StatsHeader2,
} from './Styled-components/GithubStats';
import ComponentProps from '../../Types/ComponentProps';
import GithubStatsInterface from '../../Interface/GithubStats';
import { getUserStats, getCommitCount, getLanguages, getTotalIssues, getContributionsCount } from '../../../api/GithubStats';

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
        const userPRCount = await getTotalIssues(GITHUBUSERNAME, 'pr', 'GITHUBPR');
        const userIssuesCount = await getTotalIssues(GITHUBUSERNAME, 'issue', 'GITHUBISSUE');
        const iterator = userLanguages.keys();
        const fetchedLanguages = Array.from(iterator).slice(0, 5);
        const userObject: GithubStatsInterface = {
          avatar_url: userStatsResponse.avatar_url,
          full_name: userStatsResponse.full_name,
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
          <AvatarUrl
            src={userStats.avatar_url}
            alt="Github Avatar"
          />
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
          <h2>Top 5 languages</h2>
          {userStats.languages.map((language) => (
            <div key={language}>
              <i
                className={`devicon-${language.toString().toLowerCase()}-plain`}
                style={{ fontSize: '2rem' }}
              />
              <p>
                {language}
              </p>
            </div>
          ))}
        </StatsContainer>
      )}
    </GithubStatsContainer>
  );
};

export default GithubStats;
