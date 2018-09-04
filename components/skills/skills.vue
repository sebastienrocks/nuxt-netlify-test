<template>
  <div class="skills__grid">
    <ul class="skills__list">
      <li v-for="skill in skills"
          :key="skill.text"
          class="skills__list-element"
          :class="skill.hovered"
          @mouseover="addRandomClass(skill)"
      >
        {{ skill.text }}
      </li>
    </ul>
    <ul class="skills__list">
      <li v-for="tool in tools"
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
import Component from 'nuxt-class-component';

@Component()
export default class Skills extends Vue {
  skills = [
    { 
      text: "Vue.js",
      hovered: false
    },
    { 
      text: "Nuxt",
      hovered: false
    },
    { 
      text: "AngularJS",
      hovered: false
    },
    { 
      text: "HTML",
      hovered: false
    },
    { 
      text: "CSS",
      hovered: false
    },
    { 
      text: "SASS",
      hovered: false
    },
    { 
      text: "Less",
      hovered: false
    },
    { 
      text: "Bootstrap",
      hovered: false
    },
    { 
      text: "WordPress",
      hovered: false
    },
    { 
      text: "Shopify",
      hovered: false
    },
    { 
      text: "Webpack",
      hovered: false
    },
    { 
      text: "Parcel",
      hovered: false
    },
    { 
      text: "Gulp",
      hovered: false
    },
    { 
      text: "Grunt",
      hovered: false
    },
    { 
      text: "CSS3 Animations",
      hovered: false
    },
    { 
      text: "Greensock",
      hovered: false
    },
    { 
      text: "Animejs",
      hovered: false
    },
    { 
      text: "Highcharts",
      hovered: false
    },
    { 
      text: "Accessibility",
      hovered: false
    }
  ];

  tools = [
    { 
      text: "Agile",
      hovered: false
    },
    { 
      text: "Git",
      hovered: false
    },
    { 
      text: "Photoshop",
      hovered: false
    },
    { 
      text: "Illustrator",
      hovered: false
    },
    { 
      text: "InDesign",
      hovered: false
    },
    { 
      text: "After Effects",
      hovered: false
    },
    { 
      text: "Vagrant",
      hovered: false
    },
    { 
      text: "Browserstack",
      hovered: false
    },
    { 
      text: "VSCode",
      hovered: false
    },
  ]

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