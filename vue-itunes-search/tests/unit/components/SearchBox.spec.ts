import { mount } from "@vue/test-utils";
import { expect } from "chai";
import SearchBox from "@/components/SearchBox.vue";

const searchProps = { placeholder: "Search artist" };
const filterProps = {
  placeholder: "Filter media",
  allowSpecialCharacters: true,
  hasSyncFilter: true,
  showSubmitButton: false,
  shouldClearPreviousResshouldClearInputults: false,
  shouldClearPreviousResults: false,
};

describe("SearchBox.vue", () => {
  it("Should render the SearchBox component properly", () => {
    const wrapper = mount(SearchBox, {
      props: { placeholder: "Search..." },
    });
    expect(wrapper.find(".search-box").exists()).to.be.true;
  });

  it("Should emit the search request action event when passing along the artist and clear previous results on ENTER keypress", async () => {
    const newArtist = "Gorillaz";
    const wrapper = mount(SearchBox, {
      props: searchProps,
    });

    const input = wrapper.find("input");
    await input.setValue(newArtist);
    expect((input.element as HTMLInputElement).value).to.equals(newArtist);

    input.trigger("keydown.enter", { key: "Enter" });

    const searchEmitEvent = wrapper.emitted("search-request");
    expect(searchEmitEvent).to.be.ok;
    expect((searchEmitEvent as Array<Array<unknown>>)[0][0]).to.equals(
      newArtist
    );

    const clearEmitEvent = wrapper.emitted("clear-previous-results");
    expect(clearEmitEvent).to.be.ok;
  });

  it("Should emit the search request action event when filtering albums and do not clear previous results on ENTER keypress", async () => {
    const specificAlbum = "Plastic Beach";
    const wrapper = mount(SearchBox, {
      props: filterProps,
    });

    const input = wrapper.find("input");
    await input.setValue(specificAlbum);
    expect((input.element as HTMLInputElement).value).to.equals(specificAlbum);

    input.trigger("keydown.enter", { key: "Enter" });

    const searchEmitEvent = wrapper.emitted("search-request");
    expect(searchEmitEvent).to.be.ok;
    expect((searchEmitEvent as Array<Array<unknown>>)[0][0]).to.equals(
      specificAlbum
    );

    const clearEmitEvent = wrapper.emitted("clear-previous-results");
    expect(clearEmitEvent).not.to.be.ok;
  });

  it("Should emit the search request action event when passing along the artist and clear previous results on form submit", async () => {
    const newArtist = "Aerosmith";
    const wrapper = mount(SearchBox, {
      props: searchProps,
    });

    const input = wrapper.find("input");
    await input.setValue(newArtist);
    expect((input.element as HTMLInputElement).value).to.equals(newArtist);

    wrapper.find("button").trigger("submit");

    await wrapper.vm.$nextTick();

    const searchEmitEvent = wrapper.emitted("search-request");
    expect(searchEmitEvent).to.be.ok;
    expect((searchEmitEvent as Array<Array<unknown>>)[0][0]).to.equals(
      newArtist
    );

    const clearEmitEvent = wrapper.emitted("clear-previous-results");
    expect(clearEmitEvent).to.be.ok;
  });

  it("Should emit the search request action event when filtering albums on any key up press", async () => {
    const specificAlbum = "Toys in the Attic";
    const wrapper = mount(SearchBox, {
      props: filterProps,
    });

    const input = wrapper.find("input");
    await input.setValue(specificAlbum);
    expect((input.element as HTMLInputElement).value).to.equals(specificAlbum);

    input.trigger("keyup");

    const searchEmitEvent = wrapper.emitted("search-request");
    expect(searchEmitEvent).to.be.ok;
    expect((searchEmitEvent as Array<Array<unknown>>)[0][0]).to.equals(
      specificAlbum
    );
  });
});
