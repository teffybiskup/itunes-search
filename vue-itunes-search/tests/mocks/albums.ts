import { Album } from "@/types/model";
import { ResponseData } from "@/types/response";

export const albumsMock: Album[] = [
  {
    artistId: 290242959,
    artistName: "Tame Impala",
    artistViewUrl:
      "https://music.apple.com/us/artist/tame-impala/290242959?uo=4",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/4e/c0/da/4ec0dab2-a969-a8c2-d48f-5f55755c703a/source/100x100bb.jpg",
    collectionId: 1440838039,
    collectionName: "Currents",
    collectionType: "Album",
    collectionViewUrl:
      "https://music.apple.com/us/album/currents/1440838039?uo=4",
    copyright:
      "℗ 2015 Modular Recordings, under exclusive license to Universal Music Australia Pty Limited",
    country: "USA",
    primaryGenreName: "Alternative",
    releaseDate: "2015-07-17T07:00:00Z",
    trackCount: 13,
  },
  {
    artistId: 290242959,
    artistName: "Tame Impala",
    artistViewUrl:
      "https://music.apple.com/us/artist/tame-impala/290242959?uo=4",
    artworkUrl100:
      "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/19/12/7a/19127a4d-1abc-a1f5-a75d-f7e3ca103d3f/source/100x100bb.jpg",
    collectionId: 1440765963,
    collectionName: "Lonerism",
    collectionType: "Album",
    collectionViewUrl:
      "https://music.apple.com/us/album/lonerism/1440765963?uo=4",
    copyright: "℗ 2012 Modular Recordings",
    country: "USA",
    primaryGenreName: "Alternative",
    releaseDate: "2012-01-01T08:00:00Z",
    trackCount: 13,
  },
  {
    artistId: 290242959,
    artistName: "Tame Impala",
    artistViewUrl:
      "https://music.apple.com/us/artist/tame-impala/290242959?uo=4",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/bd/de/b5/bddeb5a5-f74d-8c2c-befa-aca3f3c5c5fa/source/100x100bb.jpg",
    collectionId: 1497230760,
    collectionName: "The Slow Rush",
    collectionType: "Album",
    collectionViewUrl:
      "https://music.apple.com/us/album/the-slow-rush/1497230760?uo=4",
    copyright:
      "An Island Records Australia release; ℗ 2020 Modular Recordings Pty Ltd",
    country: "USA",
    primaryGenreName: "Alternative",
    releaseDate: "2020-02-14T08:00:00Z",
    trackCount: 12,
  },
  {
    artistId: 290242959,
    artistName: "Tame Impala",
    artistViewUrl:
      "https://music.apple.com/us/artist/tame-impala/290242959?uo=4",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/46/85/16/46851618-76b9-52fb-4df6-aa779260c331/source/100x100bb.jpg",
    collectionId: 1439752048,
    collectionName: "InnerSpeaker",
    collectionType: "Album",
    collectionViewUrl:
      "https://music.apple.com/us/album/innerspeaker/1439752048?uo=4",
    copyright: "℗ 2010 Modular Recordings",
    country: "USA",
    primaryGenreName: "Alternative",
    releaseDate: "2010-05-21T07:00:00Z",
    trackCount: 11,
  },
];

export const albumsResponseMock: ResponseData = {
  resultCount: albumsMock.length,
  results: albumsMock,
};
