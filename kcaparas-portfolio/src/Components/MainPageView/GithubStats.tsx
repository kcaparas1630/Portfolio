import { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AvatarUrl,
  GithubStatsContainer,
  StatsContainer,
  StatsHeader2,
} from './Styled-components/GithubStats';
import ComponentProps from '../../Types/ComponentProps';
import { getUserStats, getCommitCount, getLanguages, getTotalIssues, getContributionsCount } from '../../../api/GithubStats';

const GITHUBUSERNAME: string = 'kcaparas1630';

const GithubStats: FC<ComponentProps> = ({ isDarkMode }) => {
  // Put all states into userStats soon once done. Will create an interface for it.
  const [userStats, setUserStats] = useState<any>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [commitCount, setCommitCount] = useState<number>(0);
  const [PRCount, setPRCount] = useState<number>(0);
  const [issueCount, setIssueCount] = useState<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userStatsResponse = await getUserStats(GITHUBUSERNAME);
        setUserStats(userStatsResponse);
        const userLanguages = await getLanguages(GITHUBUSERNAME);
        const userCommits = await getCommitCount(GITHUBUSERNAME);
        setCommitCount(userCommits);
        const userPRCount = await getTotalIssues(GITHUBUSERNAME, 'pr', 'GITHUBPR');
        setPRCount(userPRCount);
        const userIssuesCount = await getTotalIssues(GITHUBUSERNAME, 'issue', 'GITHUBISSUE');
        setIssueCount(userIssuesCount);
        const userContributionsCount = await getContributionsCount(GITHUBUSERNAME);
        console.log(userContributionsCount);
        const iterator = userLanguages.keys();
        const fetchedLanguages = Array.from(iterator).slice(0, 5);
        setLanguages(fetchedLanguages);
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
            {commitCount}
          </p>
          <p>
            Github Pull Requests:
            {PRCount}
          </p>
          <p>
            Github Issues:
            {issueCount}
          </p>
          <h2>Top 5 languages</h2>
          {languages.map((language) => (
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
