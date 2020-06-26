<template>
  <div
    class="d-flex justify-space-between align-content-center align-center px-4 pt-2"
  >
    <div>
      <span title="Language: Filipino">
        <v-avatar :size="15">
          <v-img
            :src="require('../assets/language/ph.png')"
            :lazy-src="require('../assets/language/ph.png')"
          ></v-img>
        </v-avatar>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "language-icon"
};
</script>
