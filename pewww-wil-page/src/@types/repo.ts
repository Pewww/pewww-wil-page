export interface Content {
  name: string;
  path: string;
  sha: string;
}

export interface ContentFile {
  mode: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
}

export interface ReadmeFile {
  content: string;
  sha: string;
}
