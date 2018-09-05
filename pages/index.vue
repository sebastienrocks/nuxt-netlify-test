<template>
  <section>
    <Header />
    <main class="main-content">
      <Section title-primary-text="A little bit" title-secondary-text="about me">
        <Intro :texts="siteData.introTexts" />
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
import Intro from "~/components/intro/intro";
import Section from "~/components/section/section";
import Projects from "~/components/projects/projects";
import Companies from "~/components/companies/companies";
import Skills from "~/components/skills/skills";
import Footer from "~/components/footer/footer";

import data from "~/data/site-data.js";

@Component({
  components: {
    Header,
    Intro,
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
