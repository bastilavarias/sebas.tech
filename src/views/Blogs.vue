<template>
  <section class="pt-10">
    <v-row>
      <v-col cols="12">
        <span class="overline">Blogs</span>
      </v-col>
      <v-col cols="12" v-if="isGetBlogsStart">
        <template v-for="n in 3">
          <v-skeleton-loader
            type="list-item-three-line"
            :key="n"
          ></v-skeleton-loader>
        </template>
      </v-col>
      <v-col cols="12" v-if="!isGetBlogsStart">
        <template v-for="(blog, index) in blogs">
          <v-list-item :key="index" three-line>
            <v-list-item-content>
              <v-list-item-title
                ><router-link
                  :to="{
                    name: 'Blog Item Page',
                    params: { slug: blog.slug.current }
                  }"
                  class="text--primary"
                >
                  <span class="font-weight-bold text--primary">{{
                    blog.title
                  }}</span>
                </router-link></v-list-item-title
              >
              <v-list-item-subtitle>{{ blog.excerpt }}</v-list-item-subtitle>
              <v-list-item-subtitle
                >Created {{ formatDate(blog.createdAt) }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { GET_BLOGS } from "@/store/typeDefs/blog";
import commonUtility from "../../common/utility";

export default {
  data() {
    return {
      isGetBlogsStart: false
    };
  },

  mixins: [commonUtility],

  computed: {
    blogs() {
      return this.$store.state.blog.blogs;
    }
  },

  methods: {
    async getBlogs() {
      this.isGetBlogsStart = true;
      await this.$store.dispatch(GET_BLOGS);
      this.isGetBlogsStart = false;
    }
  },

  async created() {
    await this.getBlogs();
  }
};
</script>
