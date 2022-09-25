import axios from "axios";
import { githubConfig } from "../../config/github";
import { IUser } from "../types/user";

interface IConstructor {
  username: string;
}
const BaseEndpoint = githubConfig.user.baseEndPoint;
export class User {
  username: string;
  userUrl: string = `${BaseEndpoint}/USERNAME`;
  constructor(info: IConstructor) {
    this.username = info.username;
    this.userUrl = this.userUrl.replace("USERNAME", info.username);
  }

  async getUser(): Promise<IUser> {
    const result = await axios({
      url: this.userUrl,
    });
    return result.data;
  }
}
