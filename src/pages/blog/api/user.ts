import { githubAPI } from "../../../api";
import { githubConfig } from "../../../config/github";

export const githubUser = new githubAPI.User({
  username: githubConfig.username,
});
