import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { createAxiosInstance } from './axios';

interface GetAndDeleteParams {
  subsequentUrl?: string;
  config?: AxiosRequestConfig;
}

interface PostAndPatchParams {
  subsequentUrl?: string;
  data?: any;
  config?: AxiosRequestConfig;
}

class BaseApi {
  protected model: string;
  private axiosInstance: AxiosInstance;

  constructor(model: string) {
    this.model = model;
    this.axiosInstance = createAxiosInstance();
  }

  protected getAxiosInstance() {
    return this.axiosInstance;
  }

  protected get({
    subsequentUrl = '',
    config = {}
  }: GetAndDeleteParams) {
    return this.axiosInstance.get(`/${this.model}${subsequentUrl}`, config);
  }

  protected post({
    subsequentUrl = '',
    data,
    config = {}
  }: PostAndPatchParams) {
    return this.axiosInstance.post(`/${this.model}${subsequentUrl}`, data, config);
  }

  protected delete({
    subsequentUrl = '',
    config = {}
  }: GetAndDeleteParams) {
    return this.axiosInstance.delete(`/${this.model}${subsequentUrl}`, config);
  }

  protected patch({
    subsequentUrl = '',
    data,
    config = {}
  }: PostAndPatchParams) {
    return this.axiosInstance.patch(`/${this.model}${subsequentUrl}`, data, config);
  }
}

export default BaseApi;
