<template>
  <div>
    <div style="height:200px"></div>
    <multi-object-select  v-model="selected"/>
    <p>{{selectedValue}}</p>
  </div>
</template>

<script>
import filter from 'lodash/filter'
import map from 'lodash/map'

import MultiObjectSelect from "@/components/Navigation/MultiObjectSelect.vue";
export default {
  layout: "plain",
  components: { MultiObjectSelect },
  data() {
    return {
   
      selected: [
        {
          IsSelected: true,
          NumberOfJobs: 0,
          Code: 1,
          NameInHebrew: "ללא נסיון"
        },
        {
          IsSelected: false,
          NumberOfJobs: 0,
          Code: 1,
          NameInHebrew: "1-2 שנים"
        },
        {
          IsSelected: true,
          NumberOfJobs: 0,
          Code: 1,
          NameInHebrew:"3-4 שנים"
        },
        {
          IsSelected: true,
          NumberOfJobs: 0,
          Code: 1,
          NameInHebrew:"5-6 שנים"
        },
        {
          IsSelected: true,
          NumberOfJobs: 0,
          Code: 1,
          NameInHebrew: "7 שנים ומעלה"
        }
      ],
      
    }
  },
  computed: {
    selectedValue() {
      return map(filter(this.selected, {'IsSelected': true} ), 'NameInHebrew')
    }
  }
};
</script>

<style></style>
