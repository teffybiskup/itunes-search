import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinon from "sinon";
import store from "@/store";
import { expect } from "chai";
import { ASSIGN_ALBUMS } from "@/store/action-types";
import { loadMediaData } from "@/router/guards";
import { albumsResponseMock } from "../../mocks/albums";
import { specificMediaRouteMock, mediaRouteMock } from "../../mocks/guards";

describe("Navigation Guards", () => {
  const axiosMock = new MockAdapter(axios);
  const nextSpy = sinon.spy();
  const dispatchSpy = sinon.spy();
  store.dispatch = dispatchSpy;

  beforeEach(() => {
    axiosMock.reset();
    nextSpy.resetHistory();
    dispatchSpy.resetHistory();
  });

  describe("loadMediaData()", () => {
    it(`Should call next() and dispatch action ${ASSIGN_ALBUMS} properly`, async () => {
      axiosMock.onGet().reply(200, albumsResponseMock);
      await loadMediaData(specificMediaRouteMock, mediaRouteMock, nextSpy);

      expect(nextSpy.calledOnce).to.be.true;
      expect(dispatchSpy.calledOnceWith(ASSIGN_ALBUMS, "tame impala")).to.be
        .true;
    });
  });
});
