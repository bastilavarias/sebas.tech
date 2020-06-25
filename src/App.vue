<template>
  <section id="app">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "app",

  created() {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 18;
    this.$vuetify.theme.isDark = !isDayTime;
  }
};
</script>
