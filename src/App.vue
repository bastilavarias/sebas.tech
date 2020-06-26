<template>
  <section id="app">
    <router-view></router-view>
  </section>
</template>

<script>
import customUtilities from "./common/customUtilities";

export default {
  name: "app",

  mixins: [customUtilities],

  created() {
    this.$vuetify.theme.isDark = !this.isDayTime;
  }
};
</script>
