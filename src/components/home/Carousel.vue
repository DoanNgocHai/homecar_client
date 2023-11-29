<template>
  <v-carousel
    cycle
    height="800"
    hide-delimiter-background
    show-arrows="hover"
    hide-delimiters
  >
    <v-carousel-item 
    cover
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        slides: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>