<template lang="pug">
.home
  meta(charset="utf-8")
  meta(name="viewport", content="width=device-width,initial-scale=1")
  meta(name="description", content)
  meta(name="author", content="Mark Otto, Jacob Thornton, and Bootstrap contributors")
  meta(name="generator", content="Hugo 0.83.1")
  title iTunes Media Search
  link(rel="canonical", href="https://getbootstrap.com/docs/5.0/examples/album/")
  link(href="../assets/dist/css/bootstrap.min.css", rel="stylesheet")
  header
    .navbar.navbar-dark.bg-dark.shadow-sm.d-flex
      .navbar-brand
        strong Album
      .col-sm-12
        search-box(
          placeholder="Search artist"
          @search-request="searchTerm"
          @clear-previous-results="clearPreviousResults"
        )
  main
    section.py-5.text-center.container
      .row.py-lg-5
        .col-lg-6.col-md-8.mx-auto
          h1.fw-light iTunes Media Search
          p.lead.text-muted Please, use the search box above to get data.

      search-box(
        @search-request="filterDisplayedInfo"
        placeholder="Filter media"
        :allow-special-characters="true"
        :has-sync-filter="true"
        :show-submit-button="false"
        :should-clear-input="false"
        :should-clear-previous-results="false"
      )
      album-list(:albums="getAlbums")

  footer.bg-dark.text-muted.py-5
    .container
      p.float-end.mb-1
        a.link-light(href="#") Back to top
      p.mb-1 © Bootstrap
</template>

<script lang="ts">
import AlbumList from "@/components/AlbumList.vue";
import SearchBox from "@/components/SearchBox.vue";
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import { loadMediaData } from "@/router/guards";
import { ALBUMS } from "@/store/getter-types";
import { Album } from "@/types/model";

@Options({
  name: "iTunesMediaSearch",
  components: {
    AlbumList,
    SearchBox,
  },
  computed: {
    ...mapGetters([ALBUMS]),
  },
  beforeRouteUpdate: loadMediaData,
})
export default class iTunesMediaSearch extends Vue {
  [ALBUMS]: Album[];
  filteredAlbums: Album[] | null = null;

  filterDisplayedInfo(inputSearch: string): void {
    this.filteredAlbums = this.albums.filter((album: Album) => {
      return album.collectionName
        .toLowerCase()
        .includes(inputSearch.toLowerCase());
    });
  }

  searchTerm(inputSearch: string): void {
    this.$router.push({ params: { term: inputSearch } });
  }

  clearPreviousResults(): void {
    this.filteredAlbums = null;
  }

  get getAlbums(): Album[] {
    return this.filteredAlbums || this.albums;
  }
}
</script>

<style lang="scss">
.navbar {
  .navbar-brand,
  .col-sm-12 {
    flex: 1;
  }

  .col-sm-12 {
    margin-right: 1%;

    .form-control {
      margin-right: 1%;
    }
  }
}
</style>
