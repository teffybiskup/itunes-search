import mutations from "@/store/album/mutations";
import { expect } from "chai";
import { ALBUMS } from "@/store/getter-types";
import { SET_ALBUMS } from "@/store/mutation-types";
import { Album } from "@/types";
import { albumsMock } from "../../../mocks/albums";
import { iTunesMediaSearchStateMock } from "../../../mocks/state";

describe("Album store mutations", () => {
  const state = iTunesMediaSearchStateMock;
  state.albums = albumsMock;

  it(`Should set the ${ALBUMS} state property`, () => {
    const albums: Album[] = albumsMock;
    mutations[SET_ALBUMS](state, albums);

    expect(state[ALBUMS]).to.equals(albumsMock);
  });
});
