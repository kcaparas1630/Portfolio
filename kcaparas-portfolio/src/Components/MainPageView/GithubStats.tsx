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
  const arrayLanguages = useRef<string[] | undefined>(undefined);
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
        const languages = Array.from(iterator);
        arrayLanguages.current = languages;

        console.log('Stored languages:', arrayLanguages.current);
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
          {arrayLanguages.current?.map((language) => (
            <i
              key={language}
              className={`devicon-${language.toString().toLowerCase()}-plain`}
              style={{ fontSize: '2rem' }}
            />
          ))}
        </StatsContainer>
      )}
    </GithubStatsContainer>
  );
};

export default GithubStats;
