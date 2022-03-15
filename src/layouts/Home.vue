<template>
    <v-app class="app">
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-list outlined rounded dense color="transparent">
                            <v-list-item-group color="secondary">
                                <template
                                    v-for="(navigation, index) in navigations"
                                >
                                    <v-list-item
                                        :key="index"
                                        :to="navigation.to"
                                        exact
                                        class="font-weight-medium"
                                        exact-active-class="secondary--text"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <v-icon class="mr-1">
                                                    {{ navigation.icon }}
                                                </v-icon>
                                                <span
                                                    class="subtitle-2 font-weight-medium"
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
                                        <div class="subtitle-2">Skills</div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                        <v-breadcrumbs :items="breadcrumbs" class="pl-0 mb-2">
                            <template v-slot:item="{ item }">
                                <v-icon color="secondary" class="mr-1">{{
                                    item.icon
                                }}</v-icon
                                ><span
                                    class="font-weight-medium subtitle-2 secondary--text"
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
                                        <v-card
                                            flat
                                            style="border-radius: 1rem"
                                        >
                                            <v-card-text
                                                class="text-justify black--text"
                                                >I'm Sebastian Curtis T.
                                                Lavarias, {{ age }} years of
                                                age. A student and web developer
                                                from Manila, Philippines.
                                                Currently, I'm in my senior year
                                                at Universidad de Manila taking
                                                Bachelor of Science in
                                                Information
                                                Technology.</v-card-text
                                            >
                                        </v-card>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="5">
                                    <v-list dense>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >Resume</v-list-item-subtitle
                                                >
                                                <v-list-item-title
                                                    class="text-decoration-underline"
                                                    >MyResume2022.pdf</v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >E-mail</v-list-item-subtitle
                                                >
                                                <v-list-item-title>
                                                    sebastiancurtislavarias@gmail.com
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
                                                    09972217704
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle
                                                    >Socials</v-list-item-subtitle
                                                >
                                                <v-list-item-title>
                                                    <span
                                                        style="cursor: pointer"
                                                    >
                                                        <v-icon
                                                            small
                                                            class="mr-1"
                                                            >mdi-github</v-icon
                                                        >
                                                        <span> GitHub </span>
                                                    </span>
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
                                        :key="index"
                                        >{{ tab }}</v-tab
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
export default {
    name: 'home-layout',

    data() {
        return {
            age: 21,
            tab: null,
            tabs: ['Experiences', 'Projects'],
            breadcrumbs: [
                {
                    text: 'Home',
                    href: '/',
                    icon: 'mdi-home-variant-outline',
                },
            ],
            navigations: [
                {
                    text: 'Home',
                    to: { name: 'home' },
                    icon: 'mdi-home-variant-outline',
                },
                // {
                //     text: 'Projects',
                //     to: { name: 'home' },
                //     icon: 'mdi-webpack',
                // },
                // {
                //     text: 'Wall',
                //     to: { name: 'home' },
                //     icon: 'mdi-view-dashboard',
                // },
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
