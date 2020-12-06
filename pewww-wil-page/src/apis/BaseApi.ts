import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { createAxiosInstance } from './axios';

// @TODO: 구조 다시 생각해보기
class BaseApi {
  protected model: string;
  private axiosInstance: AxiosInstance;

  constructor(model: string) {
    this.model = model;
    this.axiosInstance = createAxiosInstance();
  }

  protected getAxiosInstance() {
    return this.axiosInstance
  }

  protected get(config?: AxiosRequestConfig) {
    return this.axiosInstance.get(`/${this.model}`, config);
  }

  protected retrieve(id: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get(`/${this.model}/${id}`, config);
  }

  protected post(data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post(`/${this.model}`, data, config);
  }

  protected delete(config?: AxiosRequestConfig) {
    return this.axiosInstance.delete(`/${this.model}`, config);
  }

  protected patch(data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.patch(`/${this.model}`, data, config);
  }
}

export default BaseApi;
