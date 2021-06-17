<template>
  <v-sheet class="pa-5 ma-3">
    <v-row>
      <v-col cols="12" md="9">
        <p>{{ title }}</p>
        <p>{{ price }}</p>
        <v-row>
          <v-col>
            <p>quantity : {{ item.quantity }}</p>
          </v-col>
          <!-- <v-col>
            <v-select append-outer-icon="mdi-plus" prepend-icon="mdi-minus" width=""
          :items="items"></v-select>
          </v-col>
         -->
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <img :src="image" :alt="title" width="100px" />
      </v-col>
      <!-- add quantity , remove from cart logic  -->
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
      price: undefined,
      items: [
        1,2,3,4,5,6,7,8,9,10
      ],
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
