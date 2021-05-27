<template lang="pug">
form.form-group.d-flex
  input.form-control(
    type="search"
    placeholder="Search..."
    aria-label="Search"
  )
  button.btn.btn-dark(
    type="submit"
    name="btnSubmit"
    value="Search"
    onclick="() => {}"
  )
    font-awesome-icon(icon="search")
</template>

<script>
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
export default class SearchBox extends Vue {}
</script>
