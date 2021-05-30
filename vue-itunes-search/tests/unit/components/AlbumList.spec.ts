import AlbumList from "@/components/AlbumList.vue";
import { mount } from "@vue/test-utils";
import { expect } from "chai";
import { albumsMock } from "../../mocks/albums";

describe("AlbumList.vue", () => {
  it("Should render the AlbumList component properly", () => {
    const wrapper = mount(AlbumList);
    expect(wrapper.find(".list").exists()).to.be.true;
  });

  it("Should show 'No Results' if there are no albums info being passed as prop", () => {
    const wrapper = mount(AlbumList, { props: { albums: [] } });

    expect(wrapper.find(".no-results").exists()).to.be.true;
    expect(wrapper.find(".no-results").text()).to.equals("No Results");
  });

  it("Should show a list of albums", () => {
    const wrapper = mount(AlbumList, { props: { albums: albumsMock } });

    expect(wrapper.find(".no-results").exists()).to.be.false;

    const albums = wrapper.findAll(".col");
    expect(albums.length).to.equals(albumsMock.length);

    const firstAlbum = albums[0];
    expect(firstAlbum.find("img").attributes().src).to.equals(
      albumsMock[0].artworkUrl100
    );
    expect(firstAlbum.find(".card-text").attributes().title).to.equals(
      albumsMock[0].collectionName
    );
    expect(firstAlbum.find(".card-text").text()).to.equals(
      albumsMock[0].collectionName
    );

    const secondAlbum = albums[1];
    expect(secondAlbum.find("img").attributes().src).to.equals(
      albumsMock[1].artworkUrl100
    );
    expect(secondAlbum.find(".card-text").attributes().title).to.equals(
      albumsMock[1].collectionName
    );
    expect(secondAlbum.find(".card-text").text()).to.equals(
      albumsMock[1].collectionName
    );

    const thirdAlbum = albums[2];
    expect(thirdAlbum.find("img").attributes().src).to.equals(
      albumsMock[2].artworkUrl100
    );
    expect(thirdAlbum.find(".card-text").attributes().title).to.equals(
      albumsMock[2].collectionName
    );
    expect(thirdAlbum.find(".card-text").text()).to.equals(
      albumsMock[2].collectionName
    );

    const fourthAlbum = albums[3];
    expect(fourthAlbum.find("img").attributes().src).to.equals(
      albumsMock[3].artworkUrl100
    );
    expect(fourthAlbum.find(".card-text").attributes().title).to.equals(
      albumsMock[3].collectionName
    );
    expect(fourthAlbum.find(".card-text").text()).to.equals(
      albumsMock[3].collectionName
    );
  });
});
