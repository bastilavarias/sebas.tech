<template>
  <section class="pt-10">
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <div class="overline">About Me</div>
            <div class="body-1">
              I'm Sebastian Curtis T. Lavarias, 20 years of age. A student and
              web developer from Manila, Philippines. Currently, I'm in my
              junior year at Universidad de Manila taking Bachelor of Science in
              Information Technology.
            </div>
          </v-col>
          <v-col cols="12">
            <div class="overline">Experience</div>
            <div class="body-1">
              <ul>
                <template v-for="(experience, index) in experiences">
                  <li :key="index">
                    {{ experience.designation }} at {{ experience.company }} ·
                    <span class="caption">{{ experience.date }}</span>
                  </li>
                </template>
              </ul>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="overline">Education</div>
            <div class="body-1">
              <ul>
                <template v-for="(educ, index) in education">
                  <li :key="index">
                    {{ educ.course }} at {{ educ.school }} ·
                    <span class="caption">{{ educ.date }}</span>
                  </li>
                </template>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <div class="overline">Skills</div>
            <template v-for="(skill, index) in skills">
              <v-chip small :key="index" class="ma-1">{{ skill }}</v-chip>
            </template>
          </v-col>
          <v-col cols="12">
            <div class="overline">Contacts</div>
            <template v-for="(contact, index) in contacts">
              <div class="d-flex align-center mb-1">
                <span class="caption mr-1">{{ contact.type }}:</span>
                <span class="body-1">{{ contact.value }}</span>
              </div>
            </template>
          </v-col>
          <v-col cols="12">
            <div class="overline">Socials</div>
            <template v-for="(social, index) in socials">
              <a
                :href="social.link"
                target="_blank"
                class="body-1 ma-1"
                :key="index"
              >
                {{ social.type }}
              </a>
            </template>
          </v-col>
          <v-col cols="12">
            <div class="overline">Latest Blogs</div>
            <div v-if="isGetLatestBlogsStart">
              <template v-for="n in 3">
                <v-skeleton-loader
                  type="list-item-two-line"
                  :key="n"
                ></v-skeleton-loader>
              </template>
            </div>
            <div v-if="!isGetLatestBlogsStart">
              <template v-for="(blog, index) in latestBlogs">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title
                      ><router-link
                        :to="{
                          name: 'Blog Item Page',
                          params: { slug: blog.slug.current }
                        }"
                        class="text--primary"
                      >
                        <span class="font-weight-bold text--primary body-1">{{
                          blog.title
                        }}</span>
                      </router-link></v-list-item-title
                    >
                    <v-list-item-subtitle>{{
                      formatDate(blog.publishedAt)
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider v-if="index !== latestBlogs.length - 1"></v-divider>
              </template>
              <div class="d-flex justify-space-between align-center">
                <div class="flex-grow-1"></div>
                <v-btn small text :to="{ name: 'Blogs Page' }">
                  <span class="text-capitalize text-decoration-underline"
                    >Read More</span
                  >
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import sanityService from "@/services/sanity";
import commonUtility from "../../common/utility";

export default {
  mixins: [commonUtility],

  data() {
    return {
      experiences: [
        {
          designation: "Web Developer",
          company: "Fourello",
          date: "Present"
        }
      ],

      education: [
        {
          course: "Information Technology",
          school: "Universidad de Manila",
          date: "Present"
        },

        {
          course: "Senior High School",
          school: "MMC CAST",
          date: "2016 - 2018"
        },

        {
          course: "Junior High School",
          school: "Tondo High School",
          date: "2012 - 2016"
        },

        {
          course: "Elementary",
          school: "Magat Salamat",
          date: "2006 - 2012"
        }
      ],

      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "NodeJS", "SQL"],

      contacts: [
        {
          type: "Email",
          value: "sebastiancurtislavarias@gmail.com"
        },

        {
          type: "Mobile Number",
          value: "09972217704"
        }
      ],

      socials: [
        {
          type: "YouTube",
          link: "https://www.youtube.com/channel/UCpBQkRsDXJZNm-wPoyXHBDg"
        },

        {
          type: "LinkedIn",
          link:
            "https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/"
        }
      ],

      latestBlogs: [],

      isGetLatestBlogsStart: false
    };
  },

  methods: {
    async getLatestBlogs() {
      try {
        const query =
          "*[_type == 'post'] | order(_createdAt desc) [0...3]";
        this.isGetLatestBlogsStart = true;
        this.latestBlogs = await sanityService.fetch(query);
        this.isGetLatestBlogsStart = false;
      } catch (_) {
        this.latestBlogs = [];
      }
    }
  },

  async created() {
    await this.getLatestBlogs();
  }
};
</script>
