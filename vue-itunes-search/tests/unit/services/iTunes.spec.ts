import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinon from "sinon";
import { expect } from "chai";
import { iTunesService } from "@/services/iTunes";
import { albumsMock, albumsResponseMock } from "../../mocks/albums";

describe("iTunes Service", () => {
  const axiosMock = new MockAdapter(axios);
  axiosMock.onGet().reply(200, albumsResponseMock);

  describe("getAlbums()", () => {
    it("Should return albums from iTunes Search API related to term being searched", async () => {
      axiosMock.onGet().reply(200, albumsResponseMock);
      const iTunesServiceStub = sinon
        .stub(iTunesService, "getAlbums")
        .callsFake((): any => albumsMock);

      const response = await iTunesService.getAlbums("tame impala");

      expect(response).to.be.an("array");
      expect(response).to.equals(albumsMock);

      iTunesServiceStub.restore();
    });
  });
});
