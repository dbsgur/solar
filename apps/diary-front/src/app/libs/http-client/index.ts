import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { API_HOST, COMMIT_HASH } from '@configs';

// TODO: Replace with real values
const API_HOST = 'http://localhost:3000';
const COMMIT_HASH = 'commit-hash';

class HttpClient {
  private static _instance = new HttpClient();

  private httpInstance: AxiosInstance;

  private authorization: string;

  constructor() {
    this.httpInstance = axios.create({
      baseURL: API_HOST,
    });

    this.authorization = '';

    this.httpInstance.interceptors.request.use((config) => {
      if (this.authorization) {
        config.headers!.Authorization = this.authorization;
      }
      config.headers!['x-request-date'] = new Date().toISOString();
      config.headers['x-commit-hash'] = COMMIT_HASH;
      return config;
    });

    this.httpInstance.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err?.response?.data?.errorMessage) {
          err.message = err?.response?.data?.errorMessage || err.message;
        }
        return Promise.reject(err);
      },
    );
  }

  static get instance() {
    return this._instance;
  }

  hasAuthorization() {
    return !!this.authorization;
  }

  setAuthorization(authorization: string) {
    this.authorization = authorization;
  }

  async get<T>(
    url: string,
    config?: { params?: any; paramsSerializer?: (param: Record<string, any>) => any },
  ): Promise<T> {
    const res = await this.httpInstance.get<{ data: T }>(url, config);
    return res?.data?.data;
  }

  async post<T>(url: string, data: Record<string, any>, config?: AxiosRequestConfig<any>): Promise<T> {
    const res = await this.httpInstance.post<{ data: T }>(url, data, config);
    return res?.data?.data;
  }

  async patch<T>(url: string, data: Record<string, any>): Promise<T> {
    const res = await this.httpInstance.patch<{ data: T }>(url, data);
    return res?.data?.data;
  }

  async delete<T>(url: string): Promise<T> {
    const res = await this.httpInstance.delete<{ data: T }>(url);
    return res?.data?.data;
  }

  async head<T>(url: string, config?: { params?: any; paramsSerializer?: any }): Promise<T> {
    const res = await this.httpInstance.head<{ data: T }>(url, config);
    return res?.data?.data;
  }
}

export const httpClient = HttpClient.instance;
