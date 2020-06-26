<template>
  <default-layout>
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
        <v-row>
          <v-col
            v-for="(project, index) in aboutMe.featuredProjects"
            :key="index"
            cols="12"
            sm="6"
          >
            <project-card
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
      <v-card-title>
        Repositories 📁
      </v-card-title>
      <v-card-text>
        <v-slide-group v-model="slidGroupState" show-arrows>
          <v-slide-item
            v-for="(repository, index) in aboutMe.repositories"
            :key="index"
          >
            <repository-card
              :name="repository.name"
              :description="repository.description"
              :sourceCodeUrl="repository.sourceCodeUrl"
              class-name="ma-1"
            ></repository-card>
          </v-slide-item>
        </v-slide-group>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          text
          color="error"
          href="https://github.com/bastilavarias?tab=repositories"
          target="_blank"
        >
          <span class="text-capitalize mr-1">View More</span>
          <v-icon color="error">mdi-xml</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </default-layout>
</template>

<script>
import aboutMeData from "../data/about-me.json";
import ProjectCard from "../components/ProjectCard";
import RepositoryCard from "../components/RepositoryCard";
import DefaultLayout from "../layouts/Default";

export default {
  components: { DefaultLayout, RepositoryCard, ProjectCard },

  metaInfo() {
    return {
      title: "About Me",
      description: this.aboutMe.introduction
    };
  },

  data() {
    return {
      aboutMe: aboutMeData,
      slidGroupState: null
    };
  }
};
</script>
