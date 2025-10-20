import axios, { type InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});
