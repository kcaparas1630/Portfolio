import { FC, useState, useEffect } from 'react';
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
  const [, setUserRepos] = useState<any>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userStatsResponse = await getUserStats(GITHUBUSERNAME);
        setUserStats(userStatsResponse);
        const userReposResponse = await getRepos(GITHUBUSERNAME);
        setUserRepos(userReposResponse);
        const userLanguages = await getLanguages(GITHUBUSERNAME);
        console.log(userLanguages);
        const iterator = userLanguages.keys();
        console.log(iterator.next().value);
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
        </StatsContainer>
      )}
    </GithubStatsContainer>
  );
};

export default GithubStats;
