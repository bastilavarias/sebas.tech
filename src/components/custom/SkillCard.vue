<template>
    <v-card
        flat
        color="#FCF7F6"
        height="5rem"
        class="d-flex justify-center align-center custom-border"
    >
        <v-card-text class="text-center">
            <v-icon x-large class="mb-lg-1">{{ icon }}</v-icon>
            <span class="d-none d-lg-block caption">{{ text }}</span>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'skill-card',

    props: {
        text: String,
        icon: String,
    },
};
</script>

<style lang="scss" scoped>
.custom-border {
    border: 1px solid rgba(black, 0.12) !important;
    border-radius: 0.5rem;
}
</style>
