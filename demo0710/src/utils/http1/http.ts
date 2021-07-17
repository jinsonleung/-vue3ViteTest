import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../../store";

/** @type {*}
 * 简单的axios封闭
 */

const http = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    alert("request now...");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    alert("resposne now...");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
