import BaseApi from './BaseApi';

class RepoApi extends BaseApi {
  constructor() {
    super('repos');
  }

  public getRepoInfo(userName: string, repoName: string) {
    return this.get({
      subsequentUrl: `/${userName}/${repoName}`
    });
  }

  public getContents(userName: string, repoName: string) {
    return this.get({
      subsequentUrl: `/${userName}/${repoName}/contents`
    });
  }

  public getFilesInFolder(userName: string, repoName: string, shaKey: string) {
    return this.get({
      subsequentUrl: `/${userName}/${repoName}/git/trees/${shaKey}`
    });
  }

  public getReadmeFile(userName: string, repoName: string, shaKey: string) {
    return this.get({
      subsequentUrl: `/${userName}/${repoName}/git/blobs/${shaKey}`
    });
  }
}

export default RepoApi;
