<template>
    <section>
        <v-row>
            <v-col cols="12"
                ><span class="caption">Work Experience</span></v-col
            >
            <template v-for="(exp, index) in workExperiences">
                <v-col cols="12" :key="index">
                    <work-experience-card
                        :company="exp.company"
                        :span="exp.span"
                        :role="exp.role"
                        :url="exp.url"
                        :type="exp.type"
                        :gigs="exp.gigs"
                        :details="exp.details"
                    ></work-experience-card>
                </v-col>
            </template>
        </v-row>

        <v-row>
            <v-col cols="12"><span class="caption">Education</span></v-col>
            <template v-for="(educ, index) in educationExperiences">
                <v-col cols="12" :key="index">
                    <education-card
                        :level="educ.level"
                        :school="educ.school"
                        :course="educ.course"
                        :span="educ.span"
                    ></education-card>
                </v-col>
            </template>
        </v-row>
    </section>
</template>

<script>
import WorkExperienceCard from '@/components/custom/WorkExperienceCard';
import EducationCard from '@/components/custom/EducationCard';
import informationMixin from '@/mixins/information';

export default {
    components: { EducationCard, WorkExperienceCard },

    mixins: [informationMixin],
};
</script>
