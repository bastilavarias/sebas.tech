<template>
  <v-card>
    <v-card-title>Hello 🙋‍♂</v-card-title>
    <v-card-text>
      <span v-html="aboutMe.introduction"></span>
    </v-card-text>
    <v-card-title>
      My Skills 👨‍💻️
    </v-card-title>
    <v-card-text>
      <v-chip
        v-for="(skill, index) in aboutMe.skills"
        :key="index"
        class="ma-2"
      >
        <v-icon class="mr-1">{{ skill.icon }}</v-icon>
        <span>{{ skill.text }}</span>
      </v-chip>
    </v-card-text>
    <v-card-title>
      Featured Projects 🖥️
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col
          v-for="(project, index) in aboutMe.featuredProjects"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
        >
          <project-card
            :key="index"
            :name="project.name"
            :description="project.description"
            :url="project.url"
            :technologies="project.technologies"
            :role="project.role"
            :imagePaths="project.imagePaths"
          ></project-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import aboutMeData from '~/static/data/about-me.json'
import ProjectCard from '../components/ProjectCard'

export default {
  components: { ProjectCard },
  data() {
    return {
      aboutMe: aboutMeData,
    }
  },
}
</script>
