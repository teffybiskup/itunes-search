<template lang="pug">
.list.py-5.bg-light
  .container
    .row.row-cols-3.row-cols-sm-3.row-cols-md-4.row-cols-lg-6.g-3
      span.no-results(v-if="!albums.length") No Results
      .col(
        v-for="(album, index) in albums"
        :key="index"
      )
        .card.shadow-sm
          img(:src="album.artworkUrl100")
          .card-body
            p.card-text(:title="album.collectionName") {{ album.collectionName }}
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Album } from "@/types/model";

export default class AlbumList extends Vue {
  @Prop({ default: [] }) albums!: Album[];
}
</script>

<style lang="scss" scoped>
.card-text {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-results {
  width: 100%;
}
</style>
