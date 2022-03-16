<template>
    <section>
        <v-row>
            <v-col cols="12"
                ><span class="caption"
                    >Some of my work projects are prohibited to share and most
                    of the projects I posted here are my side projects or my
                    current employer gave me a permit to post here.
                </span></v-col
            >
            <template v-for="(project, index) in projects">
                <v-col cols="12" :key="index">
                    <project-card
                        :name="project.name"
                        :description="project.description"
                        :type="project.type"
                        :url="project.url"
                        :previews="project.previews"
                    ></project-card>
                </v-col>
            </template>
        </v-row>
    </section>
</template>

<script>
import informationMixin from '@/mixins/informatiton';
import ProjectCard from '@/components/custom/ProjectCard';

export default {
    components: { ProjectCard },
    mixins: [informationMixin],
};
</script>
