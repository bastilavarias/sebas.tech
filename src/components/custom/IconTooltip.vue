<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" :color="color" :class="className"><slot></slot></v-icon>
    </template>
    <span v-if="text">{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'icon-tooltip',

  props: {
    text: {
      type: String,
      required: false,
    },

    color: {
      type: String,
      required: false,
    },

    className: { type: String, required: false },
  },
}
</script>
