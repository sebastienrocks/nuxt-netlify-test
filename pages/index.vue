<template>
  <section>
    <Header />
    <main class="main-content">
      <Section title-primary-text="A little bit" title-secondary-text="about me">
        <p class="main-content__text">
          I am a passionate front-end developer & designer who has relocated to London from Paris. My career originates in  IT, however after reaching a point where I realized the experience was not entirely in coherence with my ambitions I decided to undertake studies in web and print design.<br>Further down that path I became curious about front-end development and quickly dove into learning HTML & CSS.
        </p>
        <p class="main-content__text">
          Since then I have been working commercially for over 5 years, with the past year focusing on Vue.js, building various applications at Capita Employee Solutions.
        </p>
        <p class="main-content__text">
          I keep myself up to date with the latest trends in development, devoting my time to learning new technologies. Whilst doing so, I work with clients on a global scale, crafting beautiful custom fit websites.
        </p>
      </Section>
      <Section title-primary-text="Selected" title-secondary-text="projects">
        <Projects :projects="siteData.allProjects" />
      </Section>
      <Section title-primary-text="Places" title-secondary-text="I've worked">
        <Companies :companies="siteData.allCompanies" />
      </Section>
      <Section title-primary-text="Skills" title-secondary-text="and tools">
        <Skills :skills-data="siteData.skills" />
      </Section>
    </main>
    <Footer />
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';

import Header from "~/components/header/header";
import Section from "~/components/section/section";
import Projects from "~/components/projects/projects";
import Companies from "~/components/companies/companies";
import Skills from "~/components/skills/skills";
import Footer from "~/components/footer/footer";

import data from "~/data/site-data.js";

@Component({
  components: {
    Header,
    Section,
    Projects,
    Companies,
    Skills,
    Footer
  }
})
export default class IndexView extends Vue {
  siteData = data;
}
</script>
