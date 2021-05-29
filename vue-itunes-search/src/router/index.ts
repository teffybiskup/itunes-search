import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import iTunesMediaSearch from "../views/iTunesMediaSearch.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/itunes",
    name: "iTunesMediaSearch",
    component: iTunesMediaSearch,
  },
  {
    path: "/",
    redirect: "/itunes",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
