<template>
  <v-row justify="space-between">
    <div class="flex-grow-1"></div>
    <v-switch v-model="isDarkMode" class="mr-5 mr-lg-0" color="error">
      <template v-slot:prepend>
        <v-icon>
          mdi-lightbulb-on-outline
        </v-icon>
      </template>
      <template v-slot:label>
        <v-icon>
          mdi-weather-night
        </v-icon>
      </template>
    </v-switch>
  </v-row>
</template>

<script>
export default {
  name: "color-mode-switcher",

  data() {
    return {
      isDarkMode: false
    };
  },

  watch: {
    isDarkMode() {
      this.$vuetify.theme.isDark = this.isDarkMode;
    }
  },

  created() {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 18;
    this.isDarkMode = !isDayTime;
  }
};
</script>
