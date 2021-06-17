<template>
  <!-- <v-card class="pa-5 item-border item-bg" height="100%" width="100%" tile nuxt :to="`Item/${item.title}`" flat outlined> -->

  <v-card class="item-bg" height="100%" width="100%" tile nuxt :to="`Item/${item.title}`" flat outlined>
    <!-- :to="`/Shop/${item.category}/${item.title}`" -->
    <v-row >
    
      <v-card-actions>
        <v-btn color="secondary lighten-2" text>
          <!-- @click="reserve" -->
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>    
      </v-card-actions>
    </v-row>
    <!-- <img height="150px" :src="'http://localhost:1337' +item.png[0].formats.small.url" alt=""> -->
    <div style="height: 250px">
      <img style='height: 100%; width: 100%; object-fit: contain' :src="item.image" :alt="item.title" />
    </div>
    <!-- <img width="50%" :src="item.png" :alt="item.title" /> -->
        <!-- <v-card-title class="text-center deepwine--text"> -->
          <p class="text-center success--text">
            {{ item.title }}
          </p>
        <!-- </v-card-title> -->
      
   
  </v-card>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object
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