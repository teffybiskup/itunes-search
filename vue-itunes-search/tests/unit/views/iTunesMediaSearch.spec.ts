import Vuex from "vuex";
import sinon from "sinon";
import iTunesMediaSearch from "@/views/iTunesMediaSearch.vue";
import { expect } from "chai";
import { ActionTree, GetterTree, Store } from "vuex";
import { mount } from "@vue/test-utils";
import { ALBUMS } from "@/store/getter-types";
import { iTunesMediaSearchState, Album } from "@/types";
import { albumsMock } from "../../mocks/albums";

describe("iTunesMediaSearch.vue", () => {
  let store: Store<iTunesMediaSearchState>;
  let getters: GetterTree<iTunesMediaSearchState, iTunesMediaSearchState>;
  let actions: ActionTree<iTunesMediaSearchState, iTunesMediaSearchState>;

  beforeEach(() => {
    getters = {
      [ALBUMS]: () => albumsMock,
    };
    store = new Vuex.Store({
      getters,
      actions,
    });
  });

  it("Should render iTunesMediaSearch view properly", () => {
    const wrapper = mount(iTunesMediaSearch, {
      global: {
        mocks: {
          $store: store,
        },
      },
    });

    expect(wrapper.find(".home").exists()).to.be.true;
  });

  describe("Internal Components", () => {
    it("Should load search artist SearchBox", () => {
      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
          },
        },
      });

      expect(wrapper.find(".navbar .search-box").exists()).to.be.true;
    });

    it("Should load filter media SearchBox", () => {
      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
          },
        },
      });

      expect(wrapper.find(".media-info .search-box").exists()).to.be.true;
    });

    it("Should load AlbumList", () => {
      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
          },
        },
      });

      expect(wrapper.find(".media-info .list").exists()).to.be.true;
    });
  });

  describe("Methods", () => {
    it("Should filter displayed info properly", () => {
      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
          },
        },
      });

      wrapper.vm.filterDisplayedInfo("Slow");
      expect((wrapper.vm.filteredAlbums as Album[]).length).not.to.equals(
        albumsMock.length
      );
      expect((wrapper.vm.filteredAlbums as Album[])[0]).to.deep.equals(
        albumsMock[2]
      );
    });

    it("Should clear previous results properly", () => {
      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
          },
        },
      });

      wrapper.vm.filterDisplayedInfo("Speaker");
      expect((wrapper.vm.filteredAlbums as Album[]).length).not.to.equals(
        albumsMock.length
      );
      expect((wrapper.vm.filteredAlbums as Album[])[0]).to.deep.equals(
        albumsMock[3]
      );

      wrapper.vm.clearPreviousResults();
      expect(wrapper.vm.filteredAlbums).to.equals(null);
    });

    it("Should send term searched to the route in order to get media info", () => {
      const replaceSpy = sinon.spy();

      const wrapper = mount(iTunesMediaSearch, {
        global: {
          mocks: {
            $store: store,
            $router: {
              replace: replaceSpy,
            },
          },
        },
      });

      wrapper.vm.searchTerm("Weezer");
      expect(replaceSpy.calledOnce).to.be.true;
    });
  });
});
