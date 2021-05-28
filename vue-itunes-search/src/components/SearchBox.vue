<template lang="pug">
form.form-group.d-flex(@submit.prevent="searchAlbums")
  input.form-control(
    v-model="inputSearch"
    type="search"
    placeholder="Search..."
    aria-label="Search"
  )
  button.btn.btn-dark(type="submit")
    font-awesome-icon(icon="search")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
  inputSearch = "";

  searchAlbums(): void {
    this.$emit("search-request", this.inputSearch);
    this.inputSearch = "";
  }
}
</script>
