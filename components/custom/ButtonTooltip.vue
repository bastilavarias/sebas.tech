<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        :icon="icon"
        :color="color"
        :dark="dark"
        :large="large"
        :x-large="xLarge"
        :href="url"
        target="_blank"
        ><slot></slot
      ></v-btn>
    </template>
    <span v-if="text">{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'button-tooltip',

  props: {
    text: {
      type: String,
      required: false,
    },

    icon: {
      type: Boolean,
      required: false,
    },

    color: {
      type: String,
      required: false,
    },

    dark: {
      type: Boolean,
      required: false,
    },

    large: {
      type: Boolean,
      required: false,
    },

    xLarge: {
      type: Boolean,
      required: false,
    },

    url: {
      type: String,
      required: false,
    },
  },
}
</script>
