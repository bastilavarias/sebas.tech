<template>
    <v-card color="#F5F7F9" flat style="border-radius: 1rem">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="d-flex"
                    ><span class="font-weight-bold mr-2">{{ company }}</span
                    ><span class="caption grey--text">{{
                        type
                    }}</span></v-list-item-title
                >
                <v-list-item-subtitle>{{ span }}</v-list-item-subtitle>
                <v-list-item-subtitle>Role: {{ role }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text v-if="details.length > 0">
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
        details: Array,
    },
};
</script>
