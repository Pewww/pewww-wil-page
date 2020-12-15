import { observable, action, runInAction } from 'mobx';

import RepoService from '../services/RepoService';
import { Content, ContentFile, ReadmeFile } from '../@types/repo';

class RepoStore {
  @observable
  public repoName: string = '';

  @observable
  public repoUrl: string = '';

  @observable
  public contents: Content[] = [];

  @observable
  public filesInFolder: {
    [shaKey: string]: ContentFile[];
  } = {};

  @observable
  public readmeFiles: {
    [shaKey: string]: ReadmeFile[];
  } = {};

  @observable
  public readme: string = '';

  private repoService: RepoService;

  constructor() {
    this.repoService = new RepoService();
  }

  @action.bound
  public async getRepoInfo(userName: string, repoName: string) {
    const res = await this.repoService.getRepoInfo(userName, repoName);

    if (res) {
      const {
        data: {
          html_url,
          full_name
        }
      } = res;

      runInAction(() => {
        this.repoName = full_name;
        this.repoUrl = html_url;
      });
    }
  }

  @action.bound
  public async getContents(userName: string, repoName: string) {
    const res = await this.repoService.getContents(userName, repoName);

    if (res) {
      const contents = (res.data as Content[]).map(({
        name,
        path,
        sha
      }) => ({
        name,
        path,
        sha
      }));

      runInAction(() => {
        this.contents = contents;
      });
    }
  }

  @action.bound
  public async getFilesInFolder(userName: string, repoName: string, shaKey: string) {
    if (this.filesInFolder.hasOwnProperty(shaKey)) {
      return;
    }

    const res = await this.repoService.getFilesInFolder(userName, repoName, shaKey);

    if (res) {
      const {
        data: {
          sha,
          tree
        }
      } = res;

      runInAction(() => {
        this.filesInFolder = {
          ...this.filesInFolder,
          [sha]: tree
        };
      });
    }
  }

  @action.bound
  public async getReadmeFile(userName: string, repoName: string, shaKey: string) {
    const res = await this.repoService.getReadmeFile(userName, repoName, shaKey);

    if (res) {
      const {
        data: {
          sha,
          content
        }
      } = res;

      runInAction(() => {
        this.readmeFiles = {
          ...this.readmeFiles,
          [sha]: content
        };
        this.readme = content;
      });
    }
  }
}

export default RepoStore;
