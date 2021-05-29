import { iTunesMediaSearchState } from "@/types";
import { Album } from "@/types/model";
import { GetterTree } from "vuex";
import { ALBUMS } from "../getter-types";

const getters: GetterTree<iTunesMediaSearchState, iTunesMediaSearchState> = {
  [ALBUMS]: (state): Album[] => state.albums,
};

export default getters;
