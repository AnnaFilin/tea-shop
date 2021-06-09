<template>
<v-container fluid>
  <v-row justify="space-around" >
    <v-col
      cols="12"
      class="py-2"
    >
        <!-- v-model="text" -->
      <v-btn-toggle
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn x-large class="px-2 mx-3" nuxt :to="'/Traditions/china'">
          China
        </v-btn>

        <v-btn x-large class="px-2 mx-3" nuxt :to="'/Traditions/japan'">
          Japan
        </v-btn>

        <v-btn x-large class="px-2 mx-3" nuxt :to="'/Traditions/middle-east'">
          Middle East
        </v-btn>

        <v-btn x-large class="px-2 mx-3" nuxt :to="'/Traditions/africa'">
          Africa
        </v-btn>
      </v-btn-toggle>
    </v-col>

    
  </v-row>
  </v-container>
</template>

<script>
export default {
    
}
</script>