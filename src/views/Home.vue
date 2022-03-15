<template>
    <section>
        <v-row>
            <v-col cols="12"
                ><span class="caption">Work Experience</span></v-col
            >
            <template v-for="n in 2">
                <v-col cols="12" :key="n">
                    <work-experience-card></work-experience-card>
                </v-col>
            </template>
        </v-row>

        <v-row>
            <v-col cols="12"><span class="caption">Education</span></v-col>
            <template v-for="n in 4">
                <v-col cols="12" :key="n">
                    <education-card></education-card>
                </v-col>
            </template>
        </v-row>
    </section>
</template>

<script>
import WorkExperienceCard from '@/components/custom/WorkExperienceCard';
import EducationCard from '@/components/custom/EducationCard';

export default {
    components: { EducationCard, WorkExperienceCard },
};
</script>
