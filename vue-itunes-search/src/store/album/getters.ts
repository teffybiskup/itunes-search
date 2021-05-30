import { GetterTree } from "vuex";
import { iTunesMediaSearchState, Album } from "@/types";
import { ALBUMS } from "../getter-types";

const getters: GetterTree<iTunesMediaSearchState, iTunesMediaSearchState> = {
  [ALBUMS]: (state): Album[] => state.albums,
};

export default getters;
