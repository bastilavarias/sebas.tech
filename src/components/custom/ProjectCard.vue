<template>
    <v-card color="#F5F7F9" flat style="border-radius: 1rem">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="d-flex">
                    <a :href="url" target="_blank" v-if="url">
                        <span
                            class="font-weight-bold mr-2 text-decoration-underline black--text"
                            >{{ name }}</span
                        >
                    </a>
                    <span class="font-weight-bold mr-2 black--text" v-else>{{
                        name
                    }}</span>
                    <span class="caption grey--text">{{ type }}</span>
                </v-list-item-title>
                <v-list-item-subtitle
                    >Role:
                    <span class="black--text">{{
                        role
                    }}</span></v-list-item-subtitle
                >
                <v-list-item-subtitle
                    >Technologies:
                    <span class="black--text">{{
                        technologies
                    }}</span></v-list-item-subtitle
                >
            </v-list-item-content>
            <v-list-item-action>
                <v-btn
                    icon
                    color="blue"
                    :href="url"
                    target="_blank"
                    :disabled="!url"
                >
                    <v-icon>mdi-web</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>

        <v-card-text>
            {{ description }}
        </v-card-text>

        <v-card-text class="d-none d-md-block" v-if="previews.length > 0">
            <v-carousel
                v-model="carousel"
                hide-delimiters
                hide-delimiter-background
            >
                <v-carousel-item
                    v-for="(preview, index) in previews"
                    :key="index"
                >
                    <v-img
                        width="100%"
                        height="100%"
                        position="center"
                        :src="preview"
                        style="cursor: pointer"
                        @click="selectPreview(preview)"
                    ></v-img>
                </v-carousel-item>
            </v-carousel>
        </v-card-text>

        <v-dialog
            width="800"
            v-model="isPreviewOpen"
            persistent
            v-if="isPreviewOpen"
        >
            <v-card>
                <v-card-title>
                    <span>Image Preview</span>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="isPreviewOpen = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <v-img
                        :src="selectedPreview"
                        width="100%"
                        height="auto"
                    ></v-img>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    name: 'project-card',

    data() {
        return {
            carousel: 0,
            selectedPreview: null,
            isPreviewOpen: false,
        };
    },

    props: {
        name: String,
        description: String,
        type: String,
        role: String,
        url: String,
        previews: Array,
        technologies: String,
    },

    methods: {
        selectPreview(preview) {
            this.selectedPreview = preview;
            this.isPreviewOpen = true;
        },
    },
};
</script>
