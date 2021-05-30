import { RouteLocationNormalized } from "vue-router";

export const defaultRouteMock: RouteLocationNormalized = {
  path: "/",
  name: null,
  hash: "",
  query: {},
  params: {},
  fullPath: "/",
  redirectedFrom: undefined,
  meta: {},
  matched: [],
};

export const mediaRouteMock: RouteLocationNormalized = {
  path: "/media",
  name: "iTunesMediaSearch",
  hash: "",
  query: {},
  params: {},
  fullPath: "/media/",
  redirectedFrom: undefined,
  meta: {},
  matched: [],
};

export const specificMediaRouteMock: RouteLocationNormalized = {
  path: "/media/tame+impala",
  name: "iTunesMediaSearch",
  hash: "",
  query: {},
  params: { term: "tame impala" },
  fullPath: "/media/tame+impala/",
  redirectedFrom: undefined,
  meta: {},
  matched: [],
};
