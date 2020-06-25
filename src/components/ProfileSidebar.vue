<template>
  <v-card color="transparent" flat>
    <div class="text-center">
      <v-avatar :size="125" class="mb-10">
        <v-img :src="require(`../assets/${profile.picture}`)"></v-img>
      </v-avatar>
      <h1 class="display-1 font-weight-bold mb-5">
        {{ profile.name }}
      </h1>
      <div class="d-flex justify-space-around align-center mb-5">
        <button-tooltip
          v-for="(social, index) in profile.socials"
          :key="index"
          :text="social.text"
          icon
          x-large
          :url="social.url"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </button-tooltip>
      </div>
      <div>
        <v-chip class="ma-2" v-for="(contact, index) in profile.contacts">
          <v-icon class="mr-1">
            {{ contact.icon }}
          </v-icon>
          <span>{{ contact.text }}</span>
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
import profileData from "../static/data/profile.json";
import ButtonTooltip from "./custom/ButtonTooltip";

export default {
  name: "profile-sidebar",
  components: { ButtonTooltip },

  data() {
    return {
      profile: profileData
    };
  }
};
</script>
