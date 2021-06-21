<template>
  <v-sheet class="pa-5 ma-3">
    <v-row>
      <v-col cols="12" md="9">
        <p>{{ title }}</p>
        <p>{{ price }}</p>
        <v-row align="center">
            <!-- <v-row> -->
              <v-col cols="12" md="3"  >
                  <p class="text-body-1 info--text">Quantity : {{ quantity }}</p>
              </v-col>
              <v-col cols="12" md="3" >
                  <QuantitySelect v-model="quantity" class="mt-3" />
              </v-col>
              <v-col>
                {{price}}
                <TotalCalculator
                  class="text-center text-h6"
                  :priceOfProduct="price"
                  :quantity="quantity"
                />
              </v-col>
            <!-- </v-row> -->
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
import QuantitySelect from "@/components/Shop/QuantitySelect";
import TotalCalculator from "@/components/Shop/TotalCalculator";

export default {
  name: "CartItem",
  components: {
    QuantitySelect,
    TotalCalculator
  },
  // props: {
  //   item: {
  //     type: Object
  //   }
  // },
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

      quantity: undefined
    }
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
      this.quantity = 1;
      // this.price = this.price.toPrecision(1)
    }
  },

  watch: {
    quantity(newVal, oldVal) {
      console.log(newVal, oldVal);
      return newVal > oldVal ? this.$emit('addQuantity') : this.$emit('reduceQantity')
    }
  }
};
</script>
