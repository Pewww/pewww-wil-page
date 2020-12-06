import RepoApi from '../apis/RepoApi';

class RepoService {
  private repoApi: RepoApi;

  constructor(repoApi: RepoApi) {
    this.repoApi = repoApi;
  }

  public async getRepoInfo(userName: string, repoName: string) {
    try {
      const res = await this.repoApi.getRepoInfo(userName, repoName);

      console.dir(res);
    } catch(e) {
      console.error(e);
      return {};
    }
  }
}

export default RepoService;
