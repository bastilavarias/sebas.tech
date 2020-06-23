<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <profile-sidebar></profile-sidebar>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="mb-5">
              <v-tabs v-model="tab" color="error" show-arrows>
                <v-tab v-for="(tab, index) in tabs" :key="index">
                  <v-icon class="mr-1">
                    {{ tab.icon }}
                  </v-icon>
                  <span class="text-capitalize font-weight-bold">{{
                    tab.text
                  }}</span>
                </v-tab>
                <v-tab>
                  <v-icon class="mr-1">
                    mdi-file-account
                  </v-icon>
                  <span class="text-capitalize font-weight-bold"
                    >Download my Resume</span
                  >
                </v-tab>
              </v-tabs>
            </v-card>
            <nuxt></nuxt>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProfileSidebar from '../components/ProfileSidebar'
export default {
  components: { ProfileSidebar },

  data() {
    return {
      tab: null,
      tabs: [
        {
          text: 'About Me',
          icon: 'mdi-information-variant',
          to: { name: 'index' },
        },

        {
          text: 'Blogs',
          icon: 'mdi-blogger',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>
