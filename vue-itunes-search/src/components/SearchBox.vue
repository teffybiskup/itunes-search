<template lang="pug">
form.form-group.d-flex(
  @keydown.enter.prevent="searchAlbums(); shouldClearPreviousResults && clearPreviousResults()"
  @submit.prevent="searchAlbums(); shouldClearPreviousResults && clearPreviousResults()"
  v-on="hasSyncFilter ? { keyup: searchAlbums } : {}"
)
  input.form-control(
    v-model="inputSearch"
    type="search"
    placeholder="Search..."
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
  @Prop({ default: true }) readonly showSubmitButton!: boolean;
  @Prop({ default: false }) readonly hasSyncFilter!: boolean;
  @Prop({ default: true }) readonly shouldClearInput!: boolean;
  @Prop({ default: true }) readonly shouldClearPreviousResults!: boolean;

  inputSearch = "";

  searchAlbums(): void {
    this.$emit("search-request", this.inputSearch);
    this.inputSearch = this.shouldClearInput ? "" : this.inputSearch;
  }

  clearPreviousResults(): void {
    this.$emit("clear-previous-results");
  }
}
</script>
