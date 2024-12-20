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

const getRepos = async (username:string): Promise<Repository[]> => {
  const repos: Repository[] = [];
  let page = 1;

  while(true) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=100`)
    }
  }
}

export default getUserStats;
