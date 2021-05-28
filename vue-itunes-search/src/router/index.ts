import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import iTunesSearch from "../views/iTunesSearch.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/itunes",
    name: "iTunesSearch",
    component: iTunesSearch,
  },
  {
    path: "/",
    redirect: '/itunes'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
