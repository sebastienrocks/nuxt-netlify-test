<template>
  <div>
    <div class="four-col">
      <ul class="company-list">
        <li class="company-logo">
          <!-- TODO: Image in DOM, transition v-show on hover -->
          <a class="company-capita-colorz-link" href="http://capita.co.uk" target="_blank" rel="noreferrer"></a>
        </li>
        <li class="company-text">
          <strong class="company-name"><a href="http://capita.co.uk" target="_blank" rel="noreferrer">Capita</a></strong> - Employee Solutions
        </li>
        <li class="company-text">
          Front-end Engineer
        </li>
        <li class="company-text">
          London, United Kingdom
        </li>
      </ul>
    </div>
    <!-- TODO: Add Capita -->
    <div class="four-col">
      <ul class="company-list">
        <li class="company-logo">
          <!-- TODO: Image in DOM, transition v-show on hover -->
          <a class="company-logo-colorz-link" href="http://colorz.fr" target="_blank" rel="noreferrer"></a>
        </li>
        <li class="company-text">
          <strong class="company-name"><a href="http://colorz.fr" target="_blank" rel="noreferrer">Colorz</a></strong> - Web Agency
        </li>
        <li class="company-text">
          Front-end Developer
        </li>
        <li class="company-text">
          Paris, France
        </li>
      </ul>
    </div>
    <div class="four-col">
      <ul class="company-list">
        <li class="company-logo company-logo-argonautes">
          <!-- TODO: Image in DOM, transition v-show on hover -->
          <a class="company-logo-argonautes-link" href="http://les-argonautes.fr" target="_blank" rel="noreferrer"></a>
        </li>
        <li class="company-text">
          <strong class="company-name"><a href="http://les-argonautes.fr" target="_blank" rel="noreferrer">Les Argonautes</a></strong> - Web Agency
        </li>
        <li class="company-text">
          Front-end Developer
        </li>
        <li class="company-text">
          Paris, France
        </li>
      </ul>
    </div>
    <div class="four-col">
      <ul class="company-more">
        <li class="company-more-item">
          <span class="company-and">&</span>
          <span>others</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component()
export default class Companies extends Vue {}

</script>