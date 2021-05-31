<template lang="pug">
form.search-box.form-group.d-flex(
  @keypress="isAlphaNum"
  @keydown.enter.prevent="searchMedia(); shouldClearPreviousResults && clearPreviousResults()"
  @submit.prevent="searchMedia(); clearPreviousResults()"
  v-on="hasSyncFilter ? { keyup: searchMedia } : {}"
)
  input.form-control(
    v-model="inputSearch"
    :placeholder="placeholder"
    type="search"
    aria-label="Search"
  )
  button.btn.btn-dark(
    v-if="showSubmitButton"
    type="submit"
  )
    font-awesome-icon(icon="search")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

@Options({
  components: {
    FontAwesomeIcon,
  },
})
export default class SearchBox extends Vue {
  @Prop({ required: true }) placeholder!: string;
  @Prop({ default: false }) allowSpecialCharacters!: boolean;
  @Prop({ default: false }) hasSyncFilter!: boolean;
  @Prop({ default: true }) showSubmitButton!: boolean;
  @Prop({ default: true }) shouldClearInput!: boolean;
  @Prop({ default: true }) shouldClearPreviousResults!: boolean;

  inputSearch = "";

  isAlphaNum(e: KeyboardEvent): boolean | void {
    if (!/[A-z0-9.'!\- ]/gi.test(e.key) && !this.allowSpecialCharacters)
      e.preventDefault();
    return true;
  }

  searchMedia(): void {
    if (this.inputSearch || !this.shouldClearInput)
      this.$emit("search-request", this.inputSearch);
    this.inputSearch = this.shouldClearInput ? "" : this.inputSearch;
  }

  clearPreviousResults(): void {
    this.$emit("clear-previous-results");
  }
}
</script>
