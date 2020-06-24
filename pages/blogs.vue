<template>
  <v-card>
    <v-card-title>My Blogs 📓</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" xl="4" v-for="n in 1">
          <blog-card :key="n"></blog-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import BlogCard from '../components/BlogCard'
export default {
  components: { BlogCard },
}
</script>
