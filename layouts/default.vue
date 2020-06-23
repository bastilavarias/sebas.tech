<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <profile-sidebar></profile-sidebar>
          </v-col>
        </v-row>
        <v-col cols="12" md="8">
          <nuxt></nuxt>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProfileSidebar from '../components/ProfileSidebar'
export default {
  components: { ProfileSidebar },
}
</script>
