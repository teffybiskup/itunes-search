import iTunesMediaSearch from "../views/iTunesMediaSearch.vue";
import Page404 from "../views/Page404.vue";
import { RouteRecordRaw } from "vue-router";
import { loadMediaData } from "./guards";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/media",
    name: "iTunesMediaSearch",
    component: iTunesMediaSearch,
    children: [
      {
        path: ":term",
        component: iTunesMediaSearch,
        beforeEnter: loadMediaData,
      },
    ],
  },
  {
    path: "/",
    redirect: "/media",
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: Page404,
  },
];

export default routes;
