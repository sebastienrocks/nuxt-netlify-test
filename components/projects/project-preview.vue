<template>
    <div  class="projects__element"
          :class="getClass(projectIndex)"
          v-html="logo"
          @click="selectProject(projectIndex)">
    </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ProjectPreview extends Vue {
  @Prop({ type: String }) logo;
  @Prop({ type: Number }) projectIndex;

  getClass(index) {
    index = index + 1;
    return (index === 1 || index === 6) ? `projects__element--big projects__grid-0${index}` : `projects__element--small projects__grid-0${index}`;
  }

  selectProject(index) {
    this.$emit("selected-project", index);
  }
}
</script>