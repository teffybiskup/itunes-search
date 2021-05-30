import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { iTunesMediaSearchState } from "./types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<iTunesMediaSearchState>;
  }
}
