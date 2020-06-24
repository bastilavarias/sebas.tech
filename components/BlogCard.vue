<template>
  <v-card>
    <v-card-title>
      <span>
        <span title="Language: PH">
          <v-avatar :size="15">
            <v-img
              :src="require('../assets/language/ph.png')"
              :lazy-src="require('../assets/language/ph.png')"
            ></v-img>
          </v-avatar>
        </span>
        <span class="d-block mt-0">
          Blog Title
        </span>
      </span>
    </v-card-title>
    <v-card-text>
      <span class="caption">
        Visit ten places on our planet that are undergoing the biggest changes
        today. · May 21, 2000
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="error" class="text-capitalize">
        Read
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'blog-card',
}
</script>
