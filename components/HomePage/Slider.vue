<template>
  <v-carousel hide-delimiters :show-arrows="false" cycle   height="700">
      
    <v-carousel-item
      v-for="(item,i) in sliderItems"
      :key="i"
      :nuxt="item.link ? true : false"
      :to="item.link ? item.link : ''"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    >
        
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Slider',
    props: {
      sliderItems: {
        type: Array,
        required: true,
        default: ()=> []
      }
    }
  }
</script>