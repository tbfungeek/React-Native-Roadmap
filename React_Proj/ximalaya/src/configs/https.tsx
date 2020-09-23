import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;

axios.interceptors.request.use(
  (config) => {
    console.log('请求config', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log('响应数据 response', response);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
