<template>
  <v-card>
    <div
      class="d-flex justify-space-between align-content-center align-center px-4 pt-1"
    >
      <div>
        <span :title="`Language: ${language}`">
          <v-avatar :size="15">
            <v-img
              :src="require(`../assets/language/${language}.png`)"
              :lazy-src="require(`../assets/language/${language}.png`)"
            ></v-img>
          </v-avatar>
        </span>
      </div>
      <span class="caption">{{ createdAt }}</span>
    </div>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <span class="d-block">{{ description }}</span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="error" class="text-capitalize">
        Read
      </v-btn>
      <div class="flex-grow-1"></div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'blog-card',

  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    createdAt: {
      type: String,
      required: true,
    },

    updatedAt: {
      type: String,
      required: false,
    },
  },
}
</script>
