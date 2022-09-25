import { githubAPI } from "../../../api";
import { githubConfig } from "../../../config/github";

export const issue = new githubAPI.Issue({
  repo: githubConfig.repo,
  username: githubConfig.username,
});
