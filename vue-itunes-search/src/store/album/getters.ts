import { iTunesSearchState } from "@/types";
import { Album } from "@/types/model";
import { GetterTree } from "vuex";
import { ALBUMS } from "../getter-types";

const getters: GetterTree<iTunesSearchState, iTunesSearchState> = {
  [ALBUMS]: (state): Album[] => state.albums,
};

export default getters;
