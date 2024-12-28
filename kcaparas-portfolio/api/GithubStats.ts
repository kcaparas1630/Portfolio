import axios from 'axios';
import Repository from '../src/Interface/Repository';
import LanguageResponse from '../src/Interface/LanguageInterface';

const BASE_URL_GITHUB = 'https://api.github.com';
const { GITHUB_TOKEN } = import.meta.env;
const getUserStats = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL_GITHUB}/users/${username}`, {
      headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error('Cannot fetch Github User Stats');
    throw error;
  }
};

const getRepos = async (username: string): Promise<Repository[]> => {
  const repos: Repository[] = [];
  let page = 1;
  try {
    // eslint-disable-next-line no-await-in-loop
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`,
    );
    repos.push(...response.data);
    page += 1;
  } catch (error) {
    console.error(error);
    throw new Error();
  }

  return repos;
};

// identify return type later.
const getLanguages = async (username: string) => {
  try {
    const languageMap = new Map<string, number>();
    const repositoryData = await getRepos(username);
    const languageArray = await Promise.all(repositoryData.map(async (language) => {
      const response = await axios.get<LanguageResponse>(language.languages_url);
      return response.data;
    }));
    languageArray.forEach((languageObj) => {
      Object.entries(languageObj).forEach(([language, lines]) => {
        languageMap.set(language, (languageMap.get(language) || 0) + lines);
      });
    });
    return languageMap;
  } catch (error) {
    console.error('Cannot get languages');
    throw new Error();
  }
};

export { getUserStats, getRepos, getLanguages };
