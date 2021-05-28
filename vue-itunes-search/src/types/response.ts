import { Album } from "./model";

export interface ResponseData {
  resultCount: number;
  results: Album[];
}
