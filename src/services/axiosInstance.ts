import axios, { AxiosRequestHeaders } from 'axios';
import ENV from '../constants/env';
import { getToken } from '../utils/token';
import { getAuthHeader } from '../utils/header';

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      if (!config.headers) config.headers = {} as AxiosRequestHeaders;
      Object.assign(config.headers, getAuthHeader(token));
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Xử lý lỗi toàn cục ở đây
    return Promise.reject(error);
  }
);

export default axiosInstance; 