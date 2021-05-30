import { MutationTree } from "vuex";
import { SET_ALBUMS } from "@/store/mutation-types";
import { iTunesMediaSearchState, Album } from "@/types";

const mutations: MutationTree<iTunesMediaSearchState> = {
  [SET_ALBUMS]: (state, albums: Album[]) => {
    state.albums = albums;
  },
};

export default mutations;
