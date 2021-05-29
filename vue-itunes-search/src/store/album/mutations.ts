import { MutationTree } from "vuex";
import { SET_ALBUMS } from "@/store/mutation-types";
import { Album } from "@/types/model";
import { iTunesMediaSearchState } from "@/types";

const mutations: MutationTree<iTunesMediaSearchState> = {
  [SET_ALBUMS]: (state, albums: Album[]) => {
    state.albums = albums;
  },
};

export default mutations;
