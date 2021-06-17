<template>
  <!-- <div> -->
  <v-container fluid>
    <v-row class="counter-panel">
      <v-col class="pa-0">
        <v-btn @click="counter++" x-large depressed  block class="pa-0 counter-btn" >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
      <v-col class="pa-0">
        <v-text-field
          outlined  
          height="64px"
          class="bg-light text-center"
          v-model="dataValue"
          v-bind="$attrs"
          v-on="$listeners"
          hide-details
        >
        </v-text-field>
      </v-col>
      <v-col class="pa-0">
        <v-btn @click="counter--" x-large depressed  block class="pa-0">
          <v-icon>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  <!-- </div> -->
  </v-container>
</template>

<script>
import counterMixin from "@/mixins/counterMixin";

export default {
  name: "QuantitySelect",
  mixins: [ counterMixin ],
};
</script>

<style lang="sass" scoped>
.bg-light
  background: $offwhite
  border-radius: 0
//   min-height: 64px
.v-text-field--outlined > .v-input__control > .v-input__slot 
  min-height: 64px

.v-btn:not(.v-btn--round).v-size--x-large
  height: 64px
  width: 30px
</style>