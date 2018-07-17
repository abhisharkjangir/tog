import axios from 'axios';
import qs from 'query-string';
import ENV from '../constants/config';

const Axios = (baseURL) => {
  // AXIOS CONFIGRATION
  let config = {
    baseURL : baseURL || ENV.BASE_URL,
    paramsSerializer: function(queryParams) {
      return qs.stringify(queryParams)
    }
  };

  // CREATE NEW AXIOS INSTANCE
  let axiosInstance = axios.create(config);

  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use((config) => {
    config.headers['accessToken'] = null;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use((response) => {
    if (4000 === response.data.status) { // RESPONSE_CODE CAN BE CAHNGE

    }
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
  return axiosInstance;
}

// EXPORT A NEW AXIOS INSTANCE
export default Axios();
