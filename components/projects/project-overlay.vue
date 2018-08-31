<template>
  <div>
    <div class="projects__overlay"
         v-for="(project, index) in projects"
         :key="index"
         :class="showProject(index)"
    >
      <div class="projects__overlay-image-container">
        <img class="projects__overlay-image" :src="require(`@/assets/images/${project.imageName}.jpg`)" :alt="project.title">
      </div>
      <div class="projects__overlay-content-container">
        <div class="projects__overlay-angle-wrapper" :class="`projects__grid-0${index+1}`">
          <a href="#" class="projects__overlay-close-link" @click.prevent="closeOverlay">X</a>
          <div class="projects__overlay-content">
            <div class="projects__overlay-logo-wrapper" v-html="project.logo"></div>
            <h3 class="projects__overlay-title">
              <a :href="project.url" target="_blank" rel="noreferrer" class="projects__overlay-link">
                {{ project.title }}
              </a>
              <span v-if="project.company"> - Made with
                <a :href="project.company.url" target="_blank" rel="noreferrer" class="projects__overlay-link">
                  {{ project.company.name }}
                </a>
              </span>
            </h3>
            <p class="projects__overlay-text">
              {{ project.description }}
            </p>
            <Button  :button-url="project.url" button-text="View Website" extra-class="project-button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

import Button from "@/components/button/button"

@Component({
  components: { Button }
})
export default class ProjectOverlay extends Vue {
  @Prop({ type: Array }) projects;
  @Prop() activeProject;

  showProject(projectIndex) {
    projectIndex = projectIndex + 1
    return (this.activeProject === projectIndex) ? "projects__overlay--show" : "";
  }

  closeOverlay() {
    this.$emit("close-overlay");
  }
}
</script>