import store from "@/store";
import { ASSIGN_ALBUMS } from "@/store/action-types";
import { NavigationGuard } from "vue-router";

export const loadMediaData: NavigationGuard = async (to, from, next) => {
  if (!/[^a-zA-Z0-9 ]/gi.test(to.params.term as string))
    await store.dispatch(ASSIGN_ALBUMS, to.params.term);
  next();
};
