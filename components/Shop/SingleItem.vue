<template>
  <v-card class="item-bg pa-7" height="100%" width="100%" tile flat outlined>
    <v-row>
      <v-col cols="12" md="4">
        <!-- <img height="150px" :src="'http://localhost:1337' +item.png[0].formats.small.url" alt=""> -->
        <!-- <img
          style="height: 100%; width: 100%; object-fit: contain"
          :src="item.images[0]"
          :alt="item.title"
        />
        <v-row>
            <v-col>
                <img :src="item.images[1]" :alt="item.title" style="height: 100px; width: 100px; ">
            </v-col>
        </v-row> -->
      <ImageSelect :itemsList="item.images"/>
      </v-col>
      <v-col class="mx-auto px-16">
        <v-card-title class="warning--text text-h4 mb-6">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="info--text text-h6 mb-6">{{
          item.description
        }}</v-card-text>
        <v-card-text class="info--text text-h6 mb-4">
            Taste : {{ tastes }}
        </v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <SizeSelect :options="item.sizeOption" v-model="packSize" />
          </v-col>
          <v-col cols="12" md="4" class="align-self-center">
            <QuantitySelect v-model="quantity" />
            <TotalCalculator
              :priceOfProduct="item.price"
              :quantity="totalWeight"
            />
          </v-col>
        </v-row>
        <v-row>
            <v-card-text class="info--text text-h6 mb-4">
                Pick Date : {{ item.pickDate }}
            </v-card-text>
            <v-card-text class="info--text text-h6 mb-4">
                Oxidisation Level : {{ item.oxidisationLevel }}
            </v-card-text>
        </v-row>
    
        <!-- <v-card-actions>
          <v-btn color="success lighten-2" text>
            <v-icon x-large>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn color="success lighten-2" text>
            <v-icon x-large>mdi-basket</v-icon>
          </v-btn>
        </v-card-actions> -->
      </v-col>
    </v-row>
    <v-divider class="mt-5"></v-divider>
    <v-row class="mx-16">
        <v-col v-for="(tip, i) in item.instructions" :key="i" class="">
            <v-card-text class="info--text text-center text-h6 mb-4">
                {{ i }} : {{ tip }}
            </v-card-text>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
import join from 'lodash/join'
import tea from "@/pages/Shop/teaMockData.js";
import SizeSelect from "@/components/Shop/SizeSelect";
import QuantitySelect from "@/components/Shop/QuantitySelect";
import TotalCalculator from "@/components/Shop/TotalCalculator";
import ImageSelect from "@/components/Shop/ImageSelect";

const SMALL_PACK = 0.4;
const LARGE_PACK = 1;

export default {
  name: "SingleItem",
  components: {
    SizeSelect,
    QuantitySelect,
    TotalCalculator,
    ImageSelect
  },
  //   props: {
  //     item: {
  //       type: Object
  //     }
  //   },
  data() {
    return {
      item: null,
      packSize: 1,
      quantity: 1
    };
  },
  created() {
    tea.images[0] = "/images/tea/oolong/TeaPileHero1.jpg";
    tea.images[1] = "/images/tea/oolong/TeaPileHero2.jpg";
    tea.images[2] = "/images/tea/oolong/milk_oolong_1.jpg";
    this.item = tea;
  },
  computed: {
    totalWeight() {
      return this.packSize === 0
        ? SMALL_PACK * this.quantity
        : LARGE_PACK * this.quantity;
    },
    tastes() {
        return join(this.item.taste, ', ')
    }
  }
};
</script>

<style lang="sass" scoped>
.item-border
  border-style: outset
  border-color: rgba(100,	95,	92, .1)
  border-width: 2px
  border-radius: 5%
.item-bg
    background: $gentle-bg !important
</style>
