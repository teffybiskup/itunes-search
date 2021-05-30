import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("Should render App properly", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("app-stub").exists()).to.be.true;
  });
});
