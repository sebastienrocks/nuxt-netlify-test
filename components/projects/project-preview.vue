<template>
  <div class="grid">
    <div v-for="(project, index) in projects"
          :key="index"
          class="grid__element"
          :class="getClass(index)"
          v-html="project.logo"
          @click="selectProject(index)">
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ProjectPreview extends Vue {
  @Prop({ type: Array }) projects;

  getClass(cardIndex) {
    cardIndex = cardIndex + 1;
    return (cardIndex === 1 || cardIndex === 6) ? `grid__element--big grid__0${cardIndex}` : `grid__element--small grid__0${cardIndex}`;
  }

  selectProject(index) {
    this.$emit("selected-project", index);
  }
}
</script>