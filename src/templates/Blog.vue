<template>
  <default-layout>
    <back-button class-name="mb-5"></back-button>
    <v-card>
      <language-icon></language-icon>
      <v-card-title class="font-weight-bold">{{ blog.title }}</v-card-title>
      <v-card-text :class="`${!$vuetify.theme.isDark ? 'black--text' : ''}`">
        <span v-html="blog.content"> </span>
      </v-card-text>
    </v-card>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/Default";
import LanguageIcon from "../components/LanguageIcon";
import BackButton from "../components/custom/BackButton";
export default {
  components: { BackButton, LanguageIcon, DefaultLayout },

  metaInfo() {
    return {
      title: this.blog.title,
      description: this.blog.excerpt
    };
  },

  computed: {
    blog() {
      return this.$page.blog;
    }
  }
};
</script>

<page-query>
  query Blog ($id: ID!) {
  blog (id: $id){
  title
  content
  }
  }
</page-query>
