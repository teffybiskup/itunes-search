import getters from "@/store/album/getters";
import { expect } from "chai";
import { ALBUMS } from "@/store/getter-types";
import { Album } from "@/types/model";
import { albumsMock } from "../../../mocks/albums";
import { iTunesMediaSearchStateMock } from "../../../mocks/state";

describe("Album store getters", () => {
  const state = iTunesMediaSearchStateMock;
  state.albums = albumsMock;
  const rootState = state;

  it(`Should return the ${ALBUMS} from state`, () => {
    const albums: Album[] = getters[ALBUMS](state, {}, rootState, {});

    expect(albums).to.equals(albumsMock);
    expect(state[ALBUMS]).to.equals(albums);
  });
});
