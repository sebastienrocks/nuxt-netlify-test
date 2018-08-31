<template>
  <div class="projects">
    <div class="projects__grid">
      <ProjectPreview v-for="(project, index) in projects"
                      :key="index"
                      :logo="project.logo"
                      :project-index="index"
                      @selected-project="showOverlay"
      />
    </div>
    <ProjectOverlay :projects="projects" :active-project="activeProject" @close-overlay="hideOverlay" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

import ProjectPreview from "./project-preview";
import ProjectOverlay from "./project-overlay";

@Component({
  components: {
    ProjectPreview,
    ProjectOverlay
  }
})
export default class Projects extends Vue {
  @Prop({ type: Array }) projects;
  activeProject = 0;

  hideOverlay() {
    this.activeProject = 0;
  }

  showOverlay(index) {
    this.activeProject = index + 1;
  }
}

</script>