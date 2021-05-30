import { Module } from "vuex";
import { iTunesMediaSearchState } from "@/types";
import actions from "@/store/album/actions";
import getters from "@/store/album/getters";
import mutations from "@/store/album/mutations";

const iTunes: Module<iTunesMediaSearchState, iTunesMediaSearchState> = {
  state: {
    albums: [],
  },
  getters,
  mutations,
  actions,
};

export default iTunes;
