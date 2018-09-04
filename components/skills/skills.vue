<template>
  <div class="skills__grid">
    <ul class="skills__list">
      <li v-for="skill in skillsData.skills"
          :key="skill.text"
          class="skills__list-element"
          :class="skill.hovered"
          @mouseover="addRandomClass(skill)"
      >
        {{ skill.text }}
      </li>
    </ul>
    <ul class="skills__list">
      <li v-for="tool in skillsData.tools"
          :key="tool.text"
          class="skills__list-element"
          :class="tool.hovered"
          @mouseover="addRandomClass(tool)"
      >
        {{ tool.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Skills extends Vue {
  @Prop({ type: Object }) skillsData
  
  hoverColorClasses = [
    "skills__list-element--green",
    "skills__list-element--purple",
    "skills__list-element--pink",
    "skills__list-element--orange",
    "skills__list-element--yellow",
    "skills__list-element--blue",
  ];

  addRandomClass(data) {
    let randomIndex;
    let randomColor;
    let needsNewColor = true;

    while(needsNewColor) {
      randomIndex = Math.floor(Math.random()*this.hoverColorClasses.length);
      randomColor = this.hoverColorClasses[randomIndex];
  
      if(randomColor !== data.hovered) {
        needsNewColor = false; 
      }
    }

    data.hovered = randomColor;
  }
}
</script>