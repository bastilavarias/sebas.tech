<template>
    <v-card color="#F5F7F9" flat style="border-radius: 1rem">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="d-flex"
                    ><span class="font-weight-bold mr-2">{{ school }}</span
                    ><span class="caption grey--text" v-if="level">{{
                        level
                    }}</span></v-list-item-title
                >
                <v-list-item-subtitle>{{ course }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ span }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name: 'education-card',

    props: {
        level: String,
        school: String,
        course: String,
        span: String,
    },
};
</script>
