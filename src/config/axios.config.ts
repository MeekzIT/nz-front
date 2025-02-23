import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<{ data: T }>) => response.data.data;

export const api = {
  get: <T, TParams = undefined | any>(url: string, queryParams?: TParams) =>
    axiosConfig.get<{ data: T }>(url, { params: queryParams }).then(responseBody),
  post: <T>(
    url: string,
    body?: Record<string, any>,
    config?: AxiosRequestConfig<any> | undefined,
  ) => axiosConfig.post<{ data: T }>(url, body, config).then(responseBody),
  put: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.put<{ data: T }>(url, body).then(responseBody),
  delete: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.delete<{ data: T }>(url, body).then(responseBody),
};

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
