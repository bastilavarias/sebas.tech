<template>
  <default-layout>
    <v-card>
      <language-icon></language-icon>
      <v-card-title class="font-weight-bold">{{ blog.title }}</v-card-title>
      <v-card-text>
        <span v-html="blog.content"></span>
      </v-card-text>
    </v-card>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/Default";
import LanguageIcon from "../components/LanguageIcon";
export default {
  components: { LanguageIcon, DefaultLayout },

  metaInfo: {
    title: "Blog title",
    description: "sdfsdfsdfsdfsdf"
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
