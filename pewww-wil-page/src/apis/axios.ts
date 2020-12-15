import axios from 'axios';

import {
  API_BASE_PATH,
  GITHUB_API_TOKEN
} from '../constants/env';

export const createAxiosInstance = () => {
  const axiosInstance = axios.create();

  axiosInstance.defaults.baseURL = API_BASE_PATH;
  axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.common['Authorization'] = GITHUB_API_TOKEN;

  return axiosInstance;
};
