import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 10000,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export { service };

