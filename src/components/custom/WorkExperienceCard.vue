<template>
    <v-card color="#F5F7F9" flat style="border-radius: 1rem">
        <v-list-item :three-line="!!role" :two-line="!!!role">
            <v-list-item-content>
                <v-list-item-title class="d-flex">
                    <a :href="url" target="_blank" v-if="url">
                        <span
                            class="font-weight-bold text-decoration-underline mr-2 black--text"
                            >{{ company }}</span
                        >
                    </a>
                    <span class="font-weight-bold mr-2 black--text" v-else>{{
                        company
                    }}</span>
                    <span class="caption grey--text">{{
                        type
                    }}</span></v-list-item-title
                >
                <v-list-item-subtitle>{{ span }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="role"
                    >Role: {{ role }}</v-list-item-subtitle
                >
            </v-list-item-content>
        </v-list-item>
        <div class="pl-5" v-if="gigs.length > 0">
            <template v-for="(gig, index) in gigs">
                <v-list-item two-line :key="index">
                    <v-list-item-content>
                        <v-list-item-title class="d-flex">
                            <a :href="gig.url" target="_blank" v-if="gig.url">
                                <span
                                    class="font-weight-bold text-decoration-underline mr-2 black--text"
                                    >{{ gig.company }}</span
                                >
                            </a>
                            <span
                                class="font-weight-bold mr-2 black--text"
                                v-else
                                >{{ gig.company }}</span
                            >
                            <span class="caption grey--text" v-if="gig.type">{{
                                gig.type
                            }}</span></v-list-item-title
                        >
                        <v-list-item-subtitle v-if="gig.role"
                            >Role: {{ gig.role }}</v-list-item-subtitle
                        >
                    </v-list-item-content>
                </v-list-item>

                <v-card-text
                    class="pt-0"
                    style="color: rgba(0, 0, 0, 0.6)"
                    v-if="gig.details.length > 0"
                >
                    <ul>
                        <template v-for="(item, index) in gig.details">
                            <li :key="index">{{ item }}</li>
                        </template>
                    </ul>
                </v-card-text>
            </template>
        </div>
        <v-card-text class="pt-0" v-if="details.length > 0">
            <ul>
                <template v-for="(item, index) in details">
                    <li :key="index">{{ item }}</li>
                </template>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'work-experience-card',

    props: {
        company: String,
        span: String,
        role: String,
        type: String,
        gigs: Array,
        details: Array,
        url: String,
    },
};
</script>
