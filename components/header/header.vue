<template>
  <header class="header__wrapper">
    <div class="header__center">
      <p class="header__text">Hi, I'm <span class="header__text--blue">Sebastien</span></p>
      <no-ssr class="header__text" :placeholder="firstSlideText">
      <p class="header__text">
        <transition-group name="header__slide">
          <strong class="header__text--animated"
               v-for="(text, index) in slideTexts"
               :key="index"
               v-show="index === currentSlide"
          >
            {{ text }}
          </strong>
        </transition-group>
      </p>
      </no-ssr>
      <p class="header__text">based in London, and I <span class="header__text--red">Rock</span>.</p>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component()
export default class Header extends Vue {
  firstSlideText = "a Front-end Engineer";
  slideTexts = [
    this.firstSlideText,
    "a Vue.js developer",
    "a UI enthusiast",
    "a Frenchie",
    "a Canadian"
  ];
  currentSlide = 0;
  timer = 2500;
  slideToggle;

  startSlider() {
    this.slideToggle = setInterval(this.nextSlide, this.timer);
  }

  nextSlide() {
    this.slideTexts[this.currentSlide + 1] ? this.currentSlide++ : this.currentSlide = 0;
  }

  mounted() {
    this.startSlider();
  }
}
</script>
