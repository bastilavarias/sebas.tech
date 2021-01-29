import { GET_BLOGS, SET_BLOGS } from "@/store/typeDefs/blog";
import sanityService from "@/services/sanity";

const blogStoreModule = {
  state: {
    blogs: []
  },

  mutations: {
    [SET_BLOGS](state, blogs) {
      state.blogs = blogs;
    }
  },

  actions: {
    async [GET_BLOGS]({ commit }) {
      try {
        const query =
          "*[_type == 'post'] | order(_createdAt asc) {title, slug, excerpt, _createdAt}";
        const blogs = await sanityService.fetch(query);
        commit(SET_BLOGS, blogs);
      } catch (_) {
        return [];
      }
    }
  }
};

export default blogStoreModule;
