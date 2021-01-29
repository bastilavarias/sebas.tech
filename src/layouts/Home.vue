<template>
  <v-app>
    <v-app-bar app flat color="#181716" dark>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <template v-for="(route, index) in routes">
            <v-btn
              text
              class="text-capitalize"
              :to="route.to"
              :key="index"
              exact
              >{{ route.text }}</v-btn
            >
          </template>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <div class="mb-2 pt-10">
          <h1 class="display-1 font-weight-bold">Sebastian Curtis Lavarias</h1>
          <h1 class="title font-weight-regular">Student & Web Developer</h1>
        </div>
        <v-divider></v-divider>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          text: "About",
          to: { name: "About Page" }
        },

        {
          text: "Blogs",
          to: { name: "Blogs Page" }
        }
      ]
    };
  }
};
</script>
