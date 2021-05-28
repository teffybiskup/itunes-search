<template lang="pug">
.album.py-5.bg-light
  .container
    .row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3
      .col
        .card.shadow-sm(
          v-for="(album, index) in albums"
          :key="index"
        )
          img(:src="album.artworkUrl100")
          .card-body
            p.card-text {{ album.collectionName }}
</template>

<script lang="ts">
import { Album } from "@/types/model";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class AlbumList extends Vue {
  @Prop() readonly albums!: Album[];
}
</script>
