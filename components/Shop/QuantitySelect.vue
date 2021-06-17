<template>
  <v-container>
      <v-row>
        <v-btn @click="counter++">
        <v-icon>
            mdi-plus
        </v-icon>
        </v-btn>
        <v-text-field outlined :label="counter"> </v-text-field>
        <v-btn  @click="counter--">
        <v-icon>
            mdi-minus
        </v-icon>
        </v-btn>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuantitySelect",
  data() {
    return {
      counter: 1
    };
  }
};
</script>
