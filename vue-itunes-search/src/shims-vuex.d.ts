import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { iTunesSearchState } from "./types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<iTunesSearchState>;
  }
}
