<template>
  <v-card>
    <v-card-title>My Blogs 📓</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" xl="4" v-for="(blog, index) in blogs">
          <blog-card
            :key="index"
            :title="blog.title"
            :description="blog.description"
            :language="blog.language"
            :created-at="blog.createdAt"
            :updated-at="blog.updatedAt"
          ></blog-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import BlogCard from '../components/BlogCard'
import blogsData from '../static/data/blogs.json'

export default {
  components: { BlogCard },

  data() {
    return {
      blogs: blogsData,
    }
  },
}
</script>
