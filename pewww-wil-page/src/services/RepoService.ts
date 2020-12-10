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

  public async getFilesInFolder(userName: string, repoName: string, shaKey: string) {
    try {
      const res = await this.repoApi.getFilesInFolder(userName, repoName, shaKey);

      return res;
    } catch(e) {
      return null;
    }
  }

  public async getReadmeFile(userName: string, repoName: string, shaKey: string) {
    try {
      const res = await this.repoApi.getReadmeFile(userName, repoName, shaKey);

      return res;
    } catch(e) {
      return null;
    }
  }
}

export default RepoService;
