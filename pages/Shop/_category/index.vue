<template>
  <v-container >
    <h2 class="text-center darkgray--text mt-3">Shop</h2>
    <v-row justify="center">
        <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
            <Item :item="item"/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from '@/components/Shop/Item'

export default {
    components: {
        Item
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
            items: [
                {
                    title: 'Red Robe Da Hong Pao',
                    description: 'in Chinese, a highly prized tea and a Si Da Ming Cong (四大名樅, literally: The Four Great Bushes). This tea is also one of the two oolongs that make it to the list of Chinese famous teas.',
                    png: '/images/tea/oolong/TeaPileHero1.jpg'
                },
                 {
                    title: 'Gold Turtle Shui Jin Gui',
                    description: 'in Chinese, a Si Da Ming Cong.',
                    png: '/images/tea/oolong/TeaPileHero2.jpg'
                },
                 {
                    title: 'Iron Monk Arhat Tie Luo Han',
                    description: 'in Chinese, a Si Da Ming Cong tea.',
                    png: '/images/tea/oolong/TeaPileHero1.jpg'
                },
                {
                    title: 'White Comb Bai Ji Guan',
                    description: 'in Chinese, a Si Da Ming Cong tea. A light tea with light, yellowish leaves.',
                    png: '/images/tea/oolong/TeaPileHero2.jpg'
                }

            ]
        }
    },
    //temp mock for products
    // ('https://fakestoreapi.com/products')
};
</script>

<style></style>
