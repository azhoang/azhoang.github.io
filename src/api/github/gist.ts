import axios from "axios";

interface IConstructor {
  username: string;
}
export class Gist {
  listGist = "https://api.github.com/users/USERNAME/gists";
  gistById = "https://api.github.com/gists/GIST_ID";
  username: string;
  constructor(info: IConstructor) {
    this.username = info.username;
  }

  getListGistUrl() {
    return this.listGist.replace("USERNAME", this.username);
  }

  getGistIdUrl(gistId: string) {
    return this.gistById.replace("GIST_ID", gistId);
  }

  async getGistComments({ commentUrl = "", per_page = 30, page = 1 }) {
    const result = await axios({
      url: commentUrl,
      params: {
        per_page: per_page + 1,
        page,
      },
    });
    return {
      body: result.data.slice(0, per_page),
      hasNext: result.data.length === per_page + 1,
    };
  }

  async getListGist(
    config: {
      per_page?: number;
      page?: number;
    } = {}
  ) {
    const { per_page = 30, page = 1 } = config;
    const result = await axios({
      url: this.getListGistUrl(),
      params: {
        per_page: per_page + 1,
        page,
      },
    });
    return {
      body: result.data.slice(0, per_page).map((item: any) => {
        const [description, mainImage] = item.description.split("-");
        const nameFile: string = Object.keys(item.files)[0];
        return {
          ...item,
          title: description,
          files: {
            ...item.files[nameFile],
          },
          main_image: mainImage,
        };
      }),
      hasNext: result.data.length === per_page + 1,
    };
  }

  async getGistById(gistId: string) {
    const result = await axios({
      url: this.getGistIdUrl(gistId),
    });
    const [description, mainImage] = result.data.description.split("-");
    const nameFile: string = Object.keys(result.data.files)[0];
    return {
      ...result.data,
      title: description,
      main_image: mainImage,
      files: {
        ...result.data.files[nameFile],
      },
    };
  }
}
