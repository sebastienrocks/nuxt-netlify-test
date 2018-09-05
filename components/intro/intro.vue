<template functional>
  <div>
    <p class="intro__text" 
       v-for="(text, index) in props.texts"
       :key="index"
    >
      {{ text }}
    </p>
  </div>
</template>
