<template>
  <v-card>
    <v-carousel
      cycle
      height="250"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(path, index) in imagePaths" :key="index">
        <img
          style="width: 100%; height: auto !important;"
          :src="require(`../assets/projects/${path}`)"
        />
      </v-carousel-item>
    </v-carousel>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      <v-icon class="mr-1">
        mdi-desktop-classic
      </v-icon>
      <span>
        Technologies
      </span>
    </v-card-title>

    <v-card-text>
      <icon-tooltip
        v-for="(technology, index) in technologies"
        :key="index"
        class-name="ma-1"
        :text="technology.text"
      >
        {{ technology.icon }}
      </icon-tooltip>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      <v-icon class="mr-1">
        mdi-shield-account
      </v-icon>
      <span>
        Role
      </span>
    </v-card-title>

    <v-card-text>
      {{ role }}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      <v-icon class="mr-1">
        mdi-web-box
      </v-icon>
      <span>
        URLs
      </span>
    </v-card-title>

    <v-card-text>
      <div class="d-flex align-center mb-2">
        <v-icon small class="mr-2">mdi-web</v-icon>
        <a :href="url.demo" target="_blank"
          ><span>Click to view the demo.</span></a
        >
      </div>

      <div class="d-flex align-center">
        <v-icon small class="mr-2">mdi-github</v-icon>
        <a :href="url.sourceCode" target="_blank"
          ><span>Click to view the source code.</span></a
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import IconTooltip from './custom/IconTooltip'
export default {
  name: 'project-card',
  components: { IconTooltip },
  props: {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    url: {
      type: Object,
      required: true,
    },

    technologies: {
      type: Array,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    imagePaths: {
      type: Array,
      required: true,
    },
  },
}
</script>
