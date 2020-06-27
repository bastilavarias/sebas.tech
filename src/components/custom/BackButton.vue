<template>
  <v-btn
    fab
    :color="$vuetify.theme.isDark ? '#1E1E1E' : 'white'"
    @click="back"
    :class="className"
    elevation="1"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "back-button",

  props: {
    className: {
      type: String,
      required: false
    }
  },

  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
