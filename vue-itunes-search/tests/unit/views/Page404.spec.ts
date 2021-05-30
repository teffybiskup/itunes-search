import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Page404 from "@/views/Page404.vue";

describe("Page404.vue", () => {
  it("Should render Page404 view properly", () => {
    const wrapper = shallowMount(Page404);
    expect(wrapper.find("h1").text()).to.equals("404 - Page not found!");
  });
});
