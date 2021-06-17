<template>
  <v-container fluid>
    <!-- hint="שדה חובה" -->
    <v-radio-group
      v-model="dataValue"
      row
      class="mx-auto"
      :items="options"
      v-bind="$attrs"
      :rules="rules ? rules : []"
      :label="label"
      v-on="$listeners"
    >
    <v-row v-for="(item, index) in options" :key="index">
        <!-- height="70" -->
        <!-- :item="item" -->
      <v-card
        width="100%"
        class="ma-5 pa-5"
        tile
        elevation="0"
      >
        <v-radio :label="item" :value="index">
          <template #label>
            <p class="mb-0 pr-1">{{ item }}</p>
          </template>
        </v-radio>
      </v-card>
      </v-row>
    </v-radio-group>
  </v-container>
</template>

<script>
import selectMixin from "@/mixins/selectMixin.js";

export default {
  name: "SizeSelect",
  mixins: [selectMixin],
  data() {
    return {
      //   radios: "Duckduckgo"
    };
  },

  props: {
    options: {
      type: Array
    }
  }
};
</script>
