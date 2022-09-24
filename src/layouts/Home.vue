<template>
    <v-app class="app">
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="3" class="d-none d-md-block">
                        <v-list
                            outlined
                            rounded
                            dense
                            color="transparent"
                            class=""
                        >
                            <v-list-item-group color="primary">
                                <template
                                    v-for="(navigation, index) in navigations"
                                >
                                    <v-list-item
                                        :key="index"
                                        :to="navigation.to"
                                        exact
                                        class="font-weight-medium"
                                        active-class="primary--text"
                                        exact-active-class="primary--text"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <v-icon
                                                    class="mr-1"
                                                    color="primary"
                                                >
                                                    {{ navigation.icon }}
                                                </v-icon>
                                                <span
                                                    class="subtitle-2 font-weight-medium primary--text"
                                                >
                                                    {{ navigation.text }}
                                                </span>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-list-item-group>
                        </v-list>
                        <v-card color="transparent" flat>
                            <v-card-text>
                                <v-row dense>
                                    <v-col cols="12">
                                        <div class="caption primary--text">
                                            Skills
                                        </div>
                                    </v-col>

                                    <template v-for="(skill, index) in skills">
                                        <v-col cols="6" :key="index">
                                            <skill-card
                                                :text="skill.text"
                                                :icon="skill.icon"
                                            ></skill-card>
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                        <v-breadcrumbs
                            :items="$route.meta.breadcrumbs"
                            class="pl-0 mb-2"
                            divider=">"
                        >
                            <template v-slot:item="{ item }">
                                <v-icon color="primary" class="mr-1">{{
                                    item.icon
                                }}</v-icon
                                ><span
                                    class="font-weight-medium subtitle-2 primary--text"
                                    >{{ item.text }}</span
                                >
                            </template>
                            <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>
                        <v-card rounded flat elevation="1">
                            <v-row>
                                <v-col cols="12" md="7">
                                    <v-list-item two-line>
                                        <v-list-item-avatar :size="55">
                                            <v-img
                                                :src="
                                                    require('@/assets/myavatar.jpg')
                                                "
                                            ></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title
                                                class="font-weight-bold"
                                                style="font-size: 1.3rem"
                                                >Sebastian
                                                Lavarias</v-list-item-title
                                            >
                                            <v-list-item-subtitle
                                                >Web
                                                Developer</v-list-item-subtitle
                                            >
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-card-text>
                                        <div
                                            class="text-justify black--text mb-5"
                                        >
                                            I'm Sebastian Curtis T. Lavarias,
                                            {{ age }} years of age. A student
                                            and web developer from Manila,
                                            Philippines. Currently, I'm in my
                                            senior year at Universidad de Manila
                                            taking Bachelor of Science in
                                            Information Technology.
                                        </div>

                                        <div class="d-block d-md-none">
                                            <v-row dense>
                                                <template
                                                    v-for="(
                                                        skill, index
                                                    ) in skills"
                                                >
                                                    <v-col
                                                        cols="6"
                                                        sm="4"
                                                        :key="index"
                                                    >
                                                        <skill-card
                                                            :text="skill.text"
                                                            :icon="skill.icon"
                                                        ></skill-card>
                                                    </v-col>
                                                </template>
                                            </v-row>
                                        </div>

                                        <div class="d-block d-md-none">
                                            <v-list>
                                                <v-list-item class="pl-0">
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle
                                                            >Resume</v-list-item-subtitle
                                                        >
                                                        <v-list-item-title
                                                            class="text-decoration-underline"
                                                            ><v-btn
                                                                text
                                                                href="./SebastianCurtisLavarias.pdf"
                                                                target="_blank"
                                                                class="pl-0"
                                                            >
                                                                SLAVARIAS_RESUME.pdf
                                                            </v-btn></v-list-item-title
                                                        >
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item class="pl-0">
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle
                                                            >E-mail</v-list-item-subtitle
                                                        >
                                                        <v-list-item-title>
                                                            {{ email }}
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item class="pl-0">
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle
                                                            >Mobile
                                                            Number</v-list-item-subtitle
                                                        >
                                                        <v-list-item-title>
                                                            {{ mobileNumber }}
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item class="pl-0">
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle
                                                            >Socials</v-list-item-subtitle
                                                        >
                                                        <v-list-item-title>
                                                            <template
                                                                v-for="(
                                                                    social,
                                                                    index
                                                                ) in socials"
                                                            >
                                                                <v-btn
                                                                    depressed
                                                                    target="_blank"
                                                                    :href="
                                                                        social.link
                                                                    "
                                                                    class="mr-1"
                                                                    :key="index"
                                                                >
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >{{
                                                                            social.icon
                                                                        }}</v-icon
                                                                    >
                                                                    <span
                                                                        class="text-capitalize"
                                                                    >
                                                                        {{
                                                                            social.text
                                                                        }}
                                                                    </span>
                                                                </v-btn>
                                                            </template>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </div>
                                    </v-card-text>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="5"
                                    class="d-none d-md-block mb-md-5"
                                >
                                    <v-list dense>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >Resume</v-list-item-subtitle
                                                >
                                                <v-list-item-title
                                                    class="text-decoration-underline"
                                                    ><v-btn
                                                        small
                                                        text
                                                        href="./SebastianCurtisLavarias.pdf"
                                                        target="_blank"
                                                        class="pl-0"
                                                    >
                                                        SLAVARIAS_RESUME.pdf
                                                    </v-btn></v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >E-mail</v-list-item-subtitle
                                                >
                                                <v-list-item-title>
                                                    {{ email }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >Mobile
                                                    Number</v-list-item-subtitle
                                                >
                                                <v-list-item-title>
                                                    {{ mobileNumber }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >Socials</v-list-item-subtitle
                                                >
                                                <v-list-item-title>
                                                    <template
                                                        v-for="(
                                                            social, index
                                                        ) in socials"
                                                    >
                                                        <v-btn
                                                            depressed
                                                            small
                                                            target="_blank"
                                                            :href="social.link"
                                                            class="mr-1"
                                                            :key="index"
                                                        >
                                                            <v-icon
                                                                small
                                                                class="mr-1"
                                                                >{{
                                                                    social.icon
                                                                }}</v-icon
                                                            >
                                                            <span
                                                                class="text-capitalize"
                                                            >
                                                                {{
                                                                    social.text
                                                                }}
                                                            </span>
                                                        </v-btn>
                                                    </template>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                            <v-tabs color="#1F7546" v-model="tab" hide-slider>
                                <template v-for="(tab, index) in tabs">
                                    <v-tab
                                        class="text-capitalize subtitle-2"
                                        exact
                                        exact-active-class="secondary--text"
                                        :to="tab.to"
                                        :key="index"
                                        >{{ tab.text }}</v-tab
                                    >
                                </template>
                            </v-tabs>

                            <v-card-text>
                                <v-tabs-items v-model="tab">
                                    <router-view></router-view>
                                </v-tabs-items>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import SkillCard from '@/components/custom/SkillCard';
import informationMixin from '@/mixins/information';

export default {
    name: 'home-layout',

    mixins: [informationMixin],

    components: { SkillCard },

    data() {
        return {
            tab: null,
            tabs: [
                {
                    text: 'Experience',
                    to: { name: 'home' },
                },
                { text: 'Projects', to: { name: 'project' } },
            ],
            navigations: [
                {
                    text: 'Home',
                    to: { name: 'home' },
                    icon: 'mdi-home-variant-outline',
                },
                {
                    text: 'Projects',
                    to: { name: 'project' },
                    icon: 'mdi-webpack',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.app {
    background-color: #fcf7f6 !important;
}
</style>
