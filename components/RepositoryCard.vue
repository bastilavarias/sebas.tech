<template>
  <v-card :class="`${className}`" min-width="200">
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title class="text-capitalize">{{
          name ? name : 'No name.'
        }}</v-card-title>
        <v-card-text>
          <span class="d-block mb-3 text-truncate">
            {{ description ? truncateText(description) : 'No description.' }}
          </span>
        </v-card-text>
      </div>
      <v-avatar :size="65" class="ma-1">
        <v-img
          :src="require('../assets/icons8/repository.png')"
          :lazy-src="require('../assets/icons8/repository.png')"
        ></v-img>
      </v-avatar>
    </div>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn small color="error" :href="sourceCodeUrl" target="_blank">
        <span class="text-capitalize mr-1">Source Code</span>
        <v-icon small>mdi-xml</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card></template
>

<script>
export default {
  name: 'repository-card',

  props: {
    className: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },

    sourceCodeUrl: {
      type: String,
      required: true,
    },
  },

  methods: {
    truncateText(string) {
      const truncatedString = string.slice(0, 75)
      return truncatedString ? `${truncatedString}...` : 'Something went wrong.'
    },
  },
}
</script>
