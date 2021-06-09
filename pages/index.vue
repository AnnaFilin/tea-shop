<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">

    <SiteNavigation class="mt-16"/>
    </v-row>
    <!-- <h1 class="text-center darkgray--text mt-3">TEA SHOP</h1> -->
    <!-- Slider for ritual tea  ceremonies-->
    <Slider :sliderItems="sliderItems" class="mt-16"/>
    <!-- for more ceremonies by origin select buttons with links -->

    <!-- Selects -->
    <LinkSelect class="text-center mt-5" />
    <!-- Section for Best Sellers -->
    <v-container fluid class="px-16">
      <v-row justify="center" class="mt-6">
        <h2 class="darkgray--text">Best Sellers</h2>
      </v-row>
      <v-row justify="center" class="text-center mt-5 mx-16 px-16">
        <v-col cols="12" md="4" v-for="(item, i) in bestSellers" :key="i">
          <Item :item="item" />
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-6">
        <v-btn  class="text-h5" text block plain nuxt to="/Shop/most-popular">More Popular Teas</v-btn>
      </v-row>
    </v-container>
    <!-- for more best choices  -->
    <!-- link to best sellers -->
  </v-container>
</template>

<script>
import Slider from "@/components/HomePage/Slider.vue";
import LinkSelect from "@/components/Navigation/LinkSelect.vue";
import SiteNavigation from "@/components/Navigation/SiteNavigation.vue";
import Item from "@/components/Shop/Item";

export default {
  components: {
    Slider,
    LinkSelect,
    Item,
    SiteNavigation
   
  },
  data() {
    return {
      sliderItems: [
          {
            src: '/images/beverage.jpg',
            link: '/About'
          },
          {
            src: '/images/hong-kong.jpg',
            link: '/Shop'
          },
          {
            src: '/images/Japanese.jpg',
            link: '/Stories'
          },
          
        ],
      bestSellers: [
        {
          category: "Best Oolong",
          title: "Red Robe Da Hong Pao",
          description:
            "in Chinese, a highly prized tea and a Si Da Ming Cong (四大名樅, literally: The Four Great Bushes). This tea is also one of the two oolongs that make it to the list of Chinese famous teas.",
          png: "/images/tea/oolong/TeaPileHero1.jpg"
        },
        {
          category: "Best Chai",
          title: "Gold Turtle Shui Jin Gui",
          description: "in Chinese, a Si Da Ming Cong.",
          png: "/images/tea/oolong/TeaPileHero2.jpg"
        },
        {
          category: "Best Black",
          title: "Iron Monk Arhat Tie Luo Han",
          description: "in Chinese, a Si Da Ming Cong tea.",
          png: "/images/tea/oolong/TeaPileHero1.jpg"
        }
      ]
    };
  }
};
</script>
