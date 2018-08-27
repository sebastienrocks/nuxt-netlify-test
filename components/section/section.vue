<template>
  <section class="main-content__wrapper">
    <header class="main-content__left">
      <Title :primary-text="titlePrimaryText" :secondary-text="titleSecondaryText" />
    </header>
    <div class="main-content__right">
      <slot />    
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";

import Title from "@/components/title/title";

@Component({
  components: { Title }
})
export default class Section extends Vue {
  @Prop({ type: String }) titlePrimaryText;
  @Prop({ type: String }) titleSecondaryText;
}
</script>