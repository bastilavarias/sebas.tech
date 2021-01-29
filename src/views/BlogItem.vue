<template>
  <section class="pt-10">
    <v-row>
      <v-col cols="12">
        <span
          class="overline d-flex align-center"
          @click="$router.go(-1)"
          :style="{ cursor: 'pointer' }"
        >
          <v-icon small class="mr-1">mdi-arrow-left</v-icon>
          <span>Go Back</span>
        </span>
      </v-col>
      <v-col cols="12" v-if="!blog && this.isGetBlogStart">
        <v-skeleton-loader type="article"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" v-if="!this.isGetBlogStart && blog">
        <v-card flat color="transparent">
          <v-card-title>{{ blog.title }}</v-card-title>
          <v-card-subtitle>{{ formatDate(blog.createdAt) }}</v-card-subtitle>
          <v-card-text class="body-1">
            {{ blog.body[0].children[0].text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import sanityService from "@/services/sanity";
import commonUtility from "../../common/utility";

export default {
  data() {
    return {
      isGetBlogStart: false,
      blog: null
    };
  },

  mixins: [commonUtility],

  computed: {
    slug() {
      return this.$route.params.slug;
    }
  },

  methods: {
    async getBlog() {
      try {
        const query = "*[_type == 'post' && slug.current == $slug]";
        const parameters = { slug: this.slug };
        this.isGetBlogStart = true;
        const blog = await sanityService.fetch(query, parameters);
        if (blog.length === 0) return this.$router.go(-1);
        this.blog = blog[0];
        this.isGetBlogStart = false;
      } catch (_) {
        this.$router.go(-1);
      }
    }
  },

  async created() {
    if (!this.slug) this.$router.go(-1);
    await this.getBlog();
  }
};
</script>
