<template>
    <section>
        <v-row>
            <template v-for="(project, index) in projects">
                <v-col cols="12" :key="index">
                    <project-card
                        :name="project.name"
                        :description="project.description"
                        :role="project.role"
                        :type="project.type"
                        :url="project.url"
                        :previews="project.previews"
                        :technologies="project.technologies"
                    ></project-card>
                </v-col>
            </template>
        </v-row>
    </section>
</template>

<script>
import informationMixin from '@/mixins/information';
import ProjectCard from '@/components/custom/ProjectCard';

export default {
    components: { ProjectCard },
    mixins: [informationMixin],
};
</script>
