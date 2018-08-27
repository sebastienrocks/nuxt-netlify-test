<template>
  <div>
    <div class="project__container"
         v-for="(project, index) in projects"
         :key="index"
         :class="showProject(index)"
    >
      <div class="project-inner-image">
        <img class="project-image" :src="require(`@/assets/images/${project.imageName}.jpg`)" :alt="project.title">
      </div>
      <div class="project-inner-container">
        <div class="project-angle-wrapper" :class="`grid__0${index+1}`">
          <a href="#" class="project-close-link" @click.prevent="closeOverlay">X</a>
          <div class="project-content">
            <div class="project-logo" v-html="project.logo"></div>
            <h3 class="project-title"><a :href="project.url" target="_blank" rel="noreferrer" class="bold">
              {{ project.title }}</a><span v-if="project.company"> - Made with <a :href="project.company.url" target="_blank" rel="noreferrer" class="bold">{{ project.company.name }}</a></span>
            </h3>
            <p class="project-text">
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
    return (this.activeProject === projectIndex) ? "show-project" : "";
  }

  closeOverlay() {
    this.$emit("close-overlay");
  }
}
</script>