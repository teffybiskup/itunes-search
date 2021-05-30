import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import actions from "@/store/album/actions";
import sinon from "sinon";
import { expect } from "chai";
import { ActionContext } from "vuex";
import { iTunesMediaSearchState } from "@/types";
import { ASSIGN_ALBUMS } from "@/store/action-types";
import { SET_ALBUMS } from "@/store/mutation-types";
import { iTunesMediaSearchStateMock } from "../../../mocks/state";
import { albumsMock, albumsResponseMock } from "../../../mocks/albums";

describe("Album store actions", () => {
  const axiosMock = new MockAdapter(axios);
  const commitSpy = sinon.spy();

  let contextMock: ActionContext<
    iTunesMediaSearchState,
    iTunesMediaSearchState
  > = {
    dispatch: sinon.spy(),
    commit: sinon.spy(),
    state: iTunesMediaSearchStateMock,
    getters: {},
    rootState: iTunesMediaSearchStateMock,
    rootGetters: {},
  };

  beforeEach(() => {
    axiosMock.reset();
    commitSpy.resetHistory();
    contextMock = {
      dispatch: sinon.spy(),
      commit: sinon.spy(),
      state: iTunesMediaSearchStateMock,
      getters: {},
      rootState: iTunesMediaSearchStateMock,
      rootGetters: {},
    };
  });

  it(`Action ${ASSIGN_ALBUMS} should commit the albums state`, async () => {
    contextMock.commit = commitSpy;
    axiosMock.onGet().reply(200, albumsResponseMock);

    await actions[ASSIGN_ALBUMS](contextMock, "Tame Impala");

    expect(commitSpy.calledOnceWith(SET_ALBUMS, albumsMock)).to.be.true;
  });
});
