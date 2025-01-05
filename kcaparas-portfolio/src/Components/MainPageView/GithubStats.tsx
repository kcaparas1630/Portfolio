import { FC, useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AvatarUrl,
  GithubStatsContainer,
  StatsContainer,
  StatsHeader2,
} from './Styled-components/GithubStats';
import ComponentProps from '../../Types/ComponentProps';
import { getUserStats, getRepos, getLanguages } from '../../../api/GithubStats';

const GITHUBUSERNAME: string = 'kcaparas1630';

const GithubStats: FC<ComponentProps> = ({ isDarkMode }) => {
  const [userStats, setUserStats] = useState<any>(null);
  const [languages, setLanguages] = useState<string[]>([]);
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
