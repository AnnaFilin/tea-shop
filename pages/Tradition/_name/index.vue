<template>
  <v-container fluid class="mx-auto px-16">
   <h2 class="text-center darkgray--text mt-3">Japan</h2>
    <Slider :sliderItems="sliderItems" class="mx-auto mt-16"/>
  </v-container>
</template>

<script>
import Slider from "@/components/HomePage/Slider.vue";

export default {
  components: {
    Slider
  },
  data() {
    return {
      sliderItems: [
         {
            src: '/images/traditions/ceremony/japan/japan-trad-1.jpg',
            // link: '/About'
          },
          {
            src: '/images/traditions/ceremony/japan/japan-trad-2.jpg',
            // link: '/Shop'
          },
          {
            src: '/images/traditions/ceremony/japan/japan-trad-3.jpg',
            // link: '/Stories'
          },
      ]
    }
  }
};
</script>

<style></style>