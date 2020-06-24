<template>
  <v-card :class="`${className}`" min-width="400">
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title class="text-capitalize">{{
          name ? name : 'No name.'
        }}</v-card-title>
        <v-card-text>
          <span class="d-block mb-3 text-capitalize">
            {{ description ? description : 'No description.' }}
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
      <v-btn small color="error" :href="githubUrl" target="_blank">
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
      required: true,
    },

    githubUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
