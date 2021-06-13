<template>
  <v-sheet class="pa-5 ma-3">
    <v-row>
      <v-col cols="12" md="9">
        <p>{{ title }}</p>
        <!-- <p>item id : {{ item.productId }}</p> -->

        <!-- <p>{{ description }}</p> -->
        <p>{{ price }}</p>
        <p>quantity : {{ item.quantity }}</p>
      </v-col>
      <v-col cols="12" md="3">
        <img :src="image" :alt="title" width="100px" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      product: undefined,
      description: undefined,
      title: undefined,
      image: undefined,
      price: undefined
    };
  },

  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      const { data } = await axios.get("https://fakestoreapi.com/products/1");
      // console.log("data prod : ", data);
      this.product = data;
      this.description = data.description;
      this.title = data.title;
      this.price = data.price;
      this.image = data.image;
    }
  }
};
</script>
