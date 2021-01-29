import Vue from "vue";
import Vuex from "vuex";
import blogStoreModule from "@/store/modules/blog";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blog: blogStoreModule
  }
});
