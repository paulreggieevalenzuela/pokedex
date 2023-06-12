import axios from 'axios';

export const URL = 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 5000,
});

export default axiosInstance;
