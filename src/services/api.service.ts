import axios from 'axios';
import {config} from '../config';

export const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  config => {
    // Add auth token or other headers here
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    return Promise.reject(error);
  },
);
