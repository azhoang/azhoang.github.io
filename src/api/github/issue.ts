import axios from "axios";
import { githubConfig } from "../../config/github";
import { IIssueComment } from "../types/issueComment";

interface IConstructor {
  username: string;
  repo: string;
}
const BaseEndpoint = githubConfig.issue.baseEndPoint;
export class Issue {
  username: string;
  repo: string;
  issueUrl: string = `${BaseEndpoint}/USERNAME/REPO/issues`;
  singleIssueUrl: string;
  commentIssueUrl: string;
  constructor(info: IConstructor) {
    this.username = info.username;
    this.repo = info.repo;
    this.issueUrl = this.issueUrl
      .replace("USERNAME", info.username)
      .replace("REPO", info.repo);
    this.singleIssueUrl = `${this.issueUrl}/ID`;
    this.commentIssueUrl = `${this.issueUrl}/ID/comments`;
  }

  getSingleIssueUrl(id: string) {
    return this.singleIssueUrl.replace("ID", id);
  }

  getCommentIssueUrl(id: string) {
    return this.commentIssueUrl.replace("ID", id);
  }

  convertItem(item: any) {
    const match = item.body.match(/<!--(.*)-->/);

    return {
      ...item,
      ...(match && match[1] && JSON.parse(match[1])),
    };
  }

  async getIssue(id: string) {
    const result = await axios({
      url: this.getSingleIssueUrl(id),
    });
    if (result.data.state !== "open") return null;
    return this.convertItem(result.data);
  }

  async getListIssue(
    config: {
      per_page?: number;
      page?: number;
    } = {}
  ) {
    const { per_page = 30, page = 1 } = config;
    const result = await axios({
      url: this.issueUrl,
      params: {
        per_page: per_page + 1,
        page,
      },
    });
    return {
      body: result.data.slice(0, per_page).map(this.convertItem),
      hasNext: result.data.length === per_page + 1,
    };
  }

  async getListComment(
    id: string,
    config: {
      per_page?: number;
      page?: number;
    } = {}
  ): Promise<{ body: IIssueComment[]; hasNext: boolean }> {
    const { per_page = 30, page = 1 } = config;
    const result = await axios({
      url: this.getCommentIssueUrl(id),
      params: {
        per_page: per_page + 1,
        page,
      },
    });
    return {
      body: result.data,
      hasNext: result.data.length === per_page + 1,
    };
  }
}
