import BaseApi from './BaseApi';

class RepoApi extends BaseApi {
  constructor() {
    super('repos');
  }

  getRepoInfo(userName: string, repoName: string) {
    return this.getAxiosInstance().get(`/${this.model}/${userName}/${repoName}`);
  }
}

export default RepoApi;
