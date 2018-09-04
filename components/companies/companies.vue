<template functional>
  <div class="companies__grid">
    <ul v-for="company in props.companies" :key="company.name">
      <li>
        <a :href="company.url" target="_blank" rel="noreferrer" v-html="company.logo"></a>
      </li>
      <li class="companies__text">
        <strong><a :href="company.url" target="_blank" rel="noreferrer">{{ company.name }}</a></strong> - {{ company.nameDetails }}
      </li>
      <li class="companies__text">
        {{ company.role }}
      </li>
      <li class="companies__text">
        {{ company.location }}
      </li>
    </ul>
    <ul class="companies__more">
      <li>
        <span class="companies__and-sign">&</span>
        <span>others</span>
      </li>
    </ul>
  </div>
</template>