import axios, { AxiosResponse } from "axios";
import { Album } from "@/types/model";

export class iTunesService {
  public static async getAlbums(
    inputSearch: string
  ): Promise<AxiosResponse<Album[] | null>> {
    const response = await axios({
      url: `itunes/${inputSearch}`,
      baseURL: "http://localhost:3000/",
    });
    return response.data.results;
  }
}
