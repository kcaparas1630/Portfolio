import axios from 'axios';
import Repository from '../src/Interface/Repository';
import LanguageResponse from '../src/Interface/LanguageInterface';
import GITHUBLANGUAGES from '../src/Constants/GithubLanguages';

const BASE_URL_GITHUB = 'https://api.github.com';
const { GITHUB_TOKEN } = import.meta.env;

/** Function to cache data into the localstorage. Avoiding rate limiter of Github API */
const getCachedData = (dataName: string) => {
  const cachedData = localStorage.getItem(dataName);
  if (!cachedData) return null;

  const { data, timeStamp } = JSON.parse(cachedData);
  const isExpired = Date.now() - timeStamp > 60 * 60 * 1000; // 1 hour

  return isExpired ? null : data;
};

const getUserStats = async (username: string) => {
  const cacheData = getCachedData('GithubInfo');
  if (cacheData) return cacheData;
  try {
    const response = await axios.get(`${BASE_URL_GITHUB}/users/${username}`, {
      headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
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
        // have to look for a new way
        const CSharpReplace = language.replace('C#', 'Csharp');
        const CSSReplace = CSharpReplace.replace('CSS', 'CSS3');
        const newLanguage = CSSReplace.replace('HTML', 'HTML5');
        languageMap.set(newLanguage, (languageMap.get(language) || 0) + lines);
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

export { getUserStats, getRepos, getLanguages };
