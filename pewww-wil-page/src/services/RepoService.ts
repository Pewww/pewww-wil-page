import RepoApi from '../apis/RepoApi';

class RepoService {
  private repoApi: RepoApi;

  constructor() {
    this.repoApi = new RepoApi();
  }

  public async getRepoInfo(userName: string, repoName: string) {
    try {
      const res = await this.repoApi.getRepoInfo(userName, repoName);

      return res;
    } catch(e) {
      console.error(e);
      return {};
    }
  }
}

export default RepoService;
