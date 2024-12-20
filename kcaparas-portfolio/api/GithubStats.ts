import axios from 'axios';

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

export default getUserStats;
