import axios from 'axios';
import Repository from '../src/Interface/Repository';

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
    const repositoryData = await getRepos(username);
    const result = await Promise.all(repositoryData.map(async (language) => {
      const response = await axios.get(language.languages_url);
      return response.data;
    }));
    return result;
  } catch (error) {
    console.error('Cannot get languages');
    throw new Error();
  }
};

export { getUserStats, getRepos, getLanguages };
