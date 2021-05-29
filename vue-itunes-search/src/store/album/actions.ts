import { ActionContext } from "vuex";
import { iTunesService } from "@/services/itunes";
import { iTunesMediaSearchState } from "@/types";
import { ASSIGN_ALBUMS } from "../action-types";
import { SET_ALBUMS } from "../mutation-types";

const actions = {
  [ASSIGN_ALBUMS]: async (
    { commit }: ActionContext<iTunesMediaSearchState, iTunesMediaSearchState>,
    term: string
  ): Promise<void> => {
    const response = await iTunesService.getAlbums(term);
    commit(SET_ALBUMS, response);
  },
};

export default actions;
