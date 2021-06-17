<template>
  
    <v-container class="pa-1">
      <v-row justify="space-between">
            <img
                style="height: 100%; width: 100%; object-fit: contain"
                :src="itemsList[selected]"
                alt=""
            />
    </v-row>  
      <v-item-group
        v-model="selected"
       class="mt-5"
      >
        <v-row>
          <v-col
            v-for="(item, i) in itemsList"
            :key="i"
            cols="4"
          >
            <v-item v-slot="{ toggle }">
              <v-img
                :src="item"               
                class="text-right pa-2"
                @click="toggle"
              >         
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
</template>

<script>
  export default {
      name: 'ImageSelect',
   data() {
       return {
           selected: 0
       }
   },
   props: {
       itemsList: {
           type: Array
       }
   }
  }
</script>