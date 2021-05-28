import { createStore } from "vuex";
import album from "./album";

export default createStore({
  modules: {
    album,
  },
});
