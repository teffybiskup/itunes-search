import { MutationTree } from "vuex";
import { SET_ALBUMS } from "@/store/mutation-types";
import { Album } from "@/types/model";
import { iTunesSearchState } from "@/types";

const mutations: MutationTree<iTunesSearchState> = {
  [SET_ALBUMS]: (state, albums: Album[]) => {
    state.albums = albums;
  },
};

export default mutations;
