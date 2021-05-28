import { Module } from "vuex";
import { iTunesSearchState } from "@/types";
import actions from "@/store/album/actions";
import getters from "@/store/album/getters";
import mutations from "@/store/album/mutations";

const itunes: Module<iTunesSearchState, iTunesSearchState> = {
  state: {
    albums: [],
  },
  getters,
  mutations,
  actions,
};

export default itunes;
