<template>
   <v-container class="mt-10">
    <SingleItem :item="item"/>
   </v-container>
</template>

<script>
import axios from 'axios'

import SingleItem from '@/components/Shop/SingleItem'


export default {
  // layout: "plain",
  components: { SingleItem },
  data() {
    return {
    
    }
  },
  props: {
    // item: {
    //   type:Object
    // }
  },
  
  async asyncData() {
    const { data } = await axios.get('https://fakestoreapi.com/products/1')
   
    return {
      item: data,
    };
  // computed: {
  //   item() {
  //     return this.$route.params
  //   }
  }
};
</script>

<style></style>
