import axios, { AxiosResponse } from 'axios';
import Repository from '../src/Interface/Repository';
import LanguageResponse from '../src/Interface/LanguageInterface';
import GITHUBLANGUAGES from '../src/Constants/GithubLanguages';
import CommitResponse from '../src/Interface/CommitResponse';
import GithubIssuesResponse from '../src/Interface/PullRequestResponse';

const BASE_URL_GITHUB = 'https://api.github.com';
const { VITE_GITHUB_TOKEN } = import.meta.env;

/** Function to cache data into the localstorage. Avoiding rate limiter of Github API */
const getCachedData = (dataName: string) => {
  const cachedData = localStorage.getItem(dataName);
  if (!cachedData) return null;

  const { data, timeStamp } = JSON.parse(cachedData);
  const isExpired = Date.now() - timeStamp > 60 * 60 * 1000; // 1 hour

  return isExpired ? null : data;
};

type LanguageMapping = {
  'C#': string;
  CSS: string;
  HTML: string;
};

const mapLanguageToDevicon = (language: string): string => {
  const languageMapping: LanguageMapping = {
    'C#': 'Csharp',
    CSS: 'CSS3',
    HTML: 'HTML5',
  };

  return languageMapping[language as keyof LanguageMapping] || language;
};

const getUserStats = async (username: string) => {
  const cacheData = getCachedData('GithubInfo');
  if (cacheData) return cacheData;
  try {
    const response = await axios.get(`${BASE_URL_GITHUB}/users/${username}`, {
      headers: VITE_GITHUB_TOKEN ? { Authorization: `Bearer ${VITE_GITHUB_TOKEN}` } : {},
    });
    localStorage.setItem(
      'GithubInfo',
      JSON.stringify({
        data: response.data,
        timestamp: Date.now(),
      }),
    );
    return response.data;
  } catch (error) {
    console.error('Cannot fetch Github User Stats');
    throw error;
  }
};

const getRepos = async (username: string): Promise<Repository[]> => {
  const repos: Repository[] = [];
  let page = 1;
  const cacheData = getCachedData('GithubRepo');
  if (cacheData) return cacheData;
  try {
    // eslint-disable-next-line no-await-in-loop
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`,
    );
    repos.push(...response.data);
    page += 1;
    localStorage.setItem(
      'GithubRepo',
      JSON.stringify({
        data: repos,
        timestamp: Date.now(),
      }),
    );
    console.log(localStorage.getItem('GithubRepo'));
  } catch (error) {
    console.error(error);
    throw new Error();
  }

  return repos;
};

const getCommitCount = async (username: string): Promise<number> => {
  let totalCommits = 0;
  const cacheData = getCachedData('GithubCommits');
  if (cacheData) return cacheData;
  try {
    const repositoryData = await getRepos(username);
    const commitsResponses = await Promise.all(
      repositoryData.map(async (repoItem) => {
        const response: AxiosResponse<CommitResponse[]> = await axios.get(
          `https://api.github.com/repos/${repoItem.full_name}/commits`,
          {
            params: {
              author: username,
              per_page: 1,
            },
            headers: VITE_GITHUB_TOKEN
              ? {
                Authorization: `Bearer ${VITE_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
              }
              : {},
          },
        );
        // Process the Link header for each response individually
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes('rel="last"')) {
          const matches = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (matches) {
            return parseInt(matches[1], 10); // Changed to base 10
          }
        }
        return response.data.length;
      }),
    );
    // Sum up all the commit counts
    totalCommits = commitsResponses.reduce((acc, count) => acc + count, 0);

    // Add delay to avoid rate limits
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 100);
    });

    localStorage.setItem(
      'GithubCommits',
      JSON.stringify({
        data: totalCommits,
        timestamp: Date.now(),
      }),
    );
    return totalCommits;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch commit count');
  }
};

const getTotalIssues = async (
  username: string,
  issueType: string,
  localStorageName: string,
): Promise<number> => {
  const cacheData = getCachedData(localStorageName);
  if (cacheData) return cacheData;
  try {
    const PRResponse: AxiosResponse<GithubIssuesResponse> = await axios.get(
      'https://api.github.com/search/issues',
      {
        params: {
          q: `author:${username} is:${issueType}`,
          per_page: 1,
        },
        headers: VITE_GITHUB_TOKEN
          ? { Authorization: `Bearer ${VITE_GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' }
          : {},
      },
    );
    localStorage.setItem(
      localStorageName,
      JSON.stringify({
        data: PRResponse.data.total_count,
        timestamp: Date.now(),
      }),
    );
    return PRResponse.data.total_count;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
// still fixing
const getContributionsCount = async (username: string): Promise<number> => {
  try {
    const userCommitsCount = await getCommitCount(username);
    const userPRCount = await getTotalIssues(username, 'pr', 'GITHUBPR');
    const userIssuesCount = await getTotalIssues(username, 'issue', 'GITHUBISSUE');

    return userCommitsCount
    + userPRCount
    + userIssuesCount;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
// identify return type later.
const getLanguages = async (username: string) => {
  const cacheData = getCachedData('GithubLanguages');
  if (cacheData && Object.keys(cacheData).length > 0) {
    // Convert cached object back to Map
    return new Map(Object.entries(cacheData));
  }
  try {
    const languageMap = new Map<string, number>();
    const repositoryData = await getRepos(username);
    const languageArray = await Promise.all(
      repositoryData.map(async (language) => {
        const response = await axios.get<LanguageResponse>(language.languages_url);
        return response.data;
      }),
    );
    languageArray.forEach((languageObj) => {
      Object.entries(languageObj).forEach(([language, lines]) => {
        const mappedLanguage = mapLanguageToDevicon(language);
        languageMap.set(mappedLanguage, (languageMap.get(mappedLanguage) || 0) + lines);
      });
    });
    const sortedMapDescending = new Map<string, number>(
      [...languageMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .filter(([key]) => !GITHUBLANGUAGES.includes(key)),
    );
    // Check if map is not empty then set it to localStorage
    if (sortedMapDescending.size > 0) {
      // Convert Map to plain object before storing
      const languageObject = Object.fromEntries(sortedMapDescending);
      localStorage.setItem(
        'GithubLanguages',
        JSON.stringify({
          data: languageObject,
          timestamp: Date.now(),
        }),
      );
    }

    return languageMap;
  } catch (error) {
    console.error('Cannot get languages');
    throw new Error();
  }
};

export {
  getUserStats,
  getRepos,
  getLanguages,
  getCommitCount,
  getTotalIssues,
  getContributionsCount,
};
