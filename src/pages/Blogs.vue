<template>
  <default-layout>
    <v-card>
      <v-card-title>My Blogs 📓</v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="(blog, index) in blogs"
            cols="12"
            sm="6"
            md="4"
            :key="index"
          >
            <blog-card
              :title="blog.title"
              :excerpt="blog.excerpt"
              :slug="blog.id"
            ></blog-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/Default";
import BlogCard from "../components/BlogCard";
export default {
  components: { BlogCard, DefaultLayout },

  etaInfo: {
    title: "Blogs"
  },

  computed: {
    blogs() {
      const rawBlogs = this.$page.allBlog.edges;
      return rawBlogs
        ? rawBlogs.map((blog) => ({
            id: blog.node.id,
            title: blog.node.title,
            excerpt: blog.node.excerpt
          }))
        : [];
    }
  }
};
</script>

<page-query>
  query {
  allBlog {
  edges {
  node {
  id
  title
  excerpt
  }
  }
  }
  }
</page-query>
