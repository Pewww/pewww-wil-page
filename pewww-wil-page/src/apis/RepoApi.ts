import BaseApi from './BaseApi';

class RepoApi extends BaseApi {
  constructor() {
    super('repos');
  }

  getRepoInfo(userName: string, repoName: string) {
    return this.get({
      subsequentUrl: `/${userName}/${repoName}`
    });
  }
}

export default RepoApi;
