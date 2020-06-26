<template>
  <v-card>
    <language-icon></language-icon>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <span class="d-block">
        {{ truncateText(excerpt) }}
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="error" class="text-capitalize" @click="read">
        Read
      </v-btn>
      <div class="flex-grow-1"></div>
    </v-card-actions>
  </v-card>
</template>

<script>
import customUtilities from "../common/customUtilities";
import LanguageIcon from "./LanguageIcon";

export default {
  name: "blog-card",
  components: { LanguageIcon },
  mixins: [customUtilities],

  props: {
    title: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true
    },

    excerpt: {
      type: String,
      required: true
    }
  },

  methods: {
    read() {
      this.$router.push(`/blogs/${this.slug}`);
    }
  }
};
</script>
