<template>
  <v-container fluid>
      <v-row>
          <v-col>
            <v-btn @click="counter++">
                <v-icon>
                    mdi-plus
                </v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-text-field dense outlined :value="counter"> </v-text-field>
          </v-col>
          <v-col>
            <v-btn  @click="counter--">
                <v-icon>
                    mdi-minus
                </v-icon>
            </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import inputMixin from '@/mixins/inputMixin'

export default {
  name: "QuantitySelect",
  mixins: [ inputMixin ],
  data() {
    return {
      counter: 1
    };
  }
};
</script>
