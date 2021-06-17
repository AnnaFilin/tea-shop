<template>
  <v-card class="item-bg pa-7" height="100%" width="100%" tile flat outlined>
    <v-row>
      <v-col>
        <!-- <img height="150px" :src="'http://localhost:1337' +item.png[0].formats.small.url" alt=""> -->
        <img
          style="height: 100%; width: 100%; object-fit: contain"
          :src="item.image"
          :alt="item.title"
        />
        
      </v-col>
      <v-col class="mx-auto px-16">
        <v-card-title class="justify-center warning--text text-h4 mb-6">
            {{ item.title }}
        </v-card-title>
        <v-card-text class="text-center info--text text-h6 mb-6">{{ item.description }}</v-card-text>

        <v-row>
            <v-col cols="12" md="6">
                <SizeSelect :options="item.sizeOption" v-model="packSize"/>
            </v-col>
            <v-col>
                <QuantitySelect />
            </v-col>
        </v-row>

        <v-card-actions>
          <v-btn color="success lighten-2" text>
            <!-- @click="reserve" -->
            <v-icon x-large>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn color="success lighten-2" text>
            <v-icon x-large>mdi-basket</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import tea from "@/pages/Shop/teaMockData.js";
import SizeSelect from '@/components/Shop/SizeSelect'
import QuantitySelect from '@/components/Shop/QuantitySelect'
export default {
  name: "SingleItem",
  components: {
      SizeSelect,
      QuantitySelect
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
    };
  },
  created() {
    tea.image = "/images/tea/oolong/TeaPileHero1.jpg";
    this.item = tea;
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
