import { ActionContext } from "vuex";
import { iTunesService } from "@/services/itunes";
import { iTunesSearchState } from "@/types";
import { ASSIGN_ALBUMS } from "../action-types";
import { SET_ALBUMS } from "../mutation-types";

const actions = {
  [ASSIGN_ALBUMS]: async (
    { commit }: ActionContext<iTunesSearchState, iTunesSearchState>,
    inputSearch: string
  ): Promise<void> => {
    const response = await iTunesService.getAlbums(inputSearch);
    commit(SET_ALBUMS, response);
  },
};

export default actions;
