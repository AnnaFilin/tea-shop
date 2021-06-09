<template>
  <v-card class="pa-5" height="100%" width="100%" tile>
    <v-row >
    
      <v-card-actions>
        <v-btn color="secondary lighten-2" text>
          <!-- @click="reserve" -->
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>    
      </v-card-actions>
    </v-row>
    <!-- <img height="150px" :src="'http://localhost:1337' +item.png[0].formats.small.url" alt=""> -->
    <img width="50%" :src="item.png" :alt="item.title" />
        <v-card-title class="text-center darkgray--text">
            {{ item.title }}
        </v-card-title>
      
    <!-- <v-card-text class="text-center ">{{ item.description }}</v-card-text> -->
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
