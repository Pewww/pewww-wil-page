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
      return null;
    }
  }

  public async getContents(userName: string, repoName: string) {
    try {
      const res = await this.repoApi.getContents(userName, repoName);

      return res;
    } catch(e) {
      return null;
    }
  }
}

export default RepoService;
