<template>
  <v-container class="mt-10">
    <!-- <h2 class="text-center darkgray--text mt-3">Shop</h2> -->
    <LinkSelect class="text-center mt-5" />
    <v-row justify="center">
        <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
            <Item :item="item" class="pa-5 item-border"/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Item from '@/components/Shop/Item'
import LinkSelect from "@/components/Navigation/LinkSelect.vue";
import tea from '@/pages/Shop/teaMockData.js'

export default {
    components: {
        Item,
        LinkSelect
    },
    // async asyncData({ $strapi, store, error }) {
    //     try {
    //     const response = await $strapi.$teas.find()
    //     // store.commit('setFeaturedProducts', response)
    //     console.log('response : ', response);
    //         return {
    //             items: response
    //         }
    //     } catch (e) {
    //     error(e)
    //     }
    // },
    data() {
        return {
            // items: [
            //     {
            //         title: 'Red Robe Da Hong Pao',
            //         description: 'in Chinese, a highly prized tea and a Si Da Ming Cong (四大名樅, literally: The Four Great Bushes). This tea is also one of the two oolongs that make it to the list of Chinese famous teas.',
            //         png: '/images/tea/oolong/TeaPileHero1.jpg'
            //     },
            //      {
            //         title: 'Gold Turtle Shui Jin Gui',
            //         description: 'in Chinese, a Si Da Ming Cong.',
            //         png: '/images/tea/oolong/TeaPileHero2.jpg'
            //     },
            //      {
            //         title: 'Iron Monk Arhat Tie Luo Han',
            //         description: 'in Chinese, a Si Da Ming Cong tea.',
            //         png: '/images/tea/oolong/TeaPileHero1.jpg'
            //     },
            //     {
            //         title: 'White Comb Bai Ji Guan',
            //         description: 'in Chinese, a Si Da Ming Cong tea. A light tea with light, yellowish leaves.',
            //         png: '/images/tea/oolong/TeaPileHero2.jpg'
            //     }

            // ]
        }
    },
    //temp mock for products
    // 
    async asyncData() {
      console.log('tea : ', tea);
      tea.image = '/images/tea/oolong/TeaPileHero1.jpg'

    const { data } = await axios.get('https://fakestoreapi.com/products');
   
    return {
      items: [...data, tea]
    };
  }
};
</script>

<style></style>
