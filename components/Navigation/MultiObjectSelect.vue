<template>
  <v-container fluid>
 
    <v-row justify="center">
        <v-item-group v-model="dataValue" multiple mandatory>

        <v-row>
          <v-col v-for="(item, i) in items" :key="i">
            <v-item v-slot="{ active, toggle }" class="pa-6">
              <v-card outlined @click="selectItem(item)" :item="item" color="green">
                <p>
                  {{ item.NameInHebrew }}
                </p>
                <v-btn icon dark>
                  
                </v-btn>
                <v-checkbox
                  :input-value="items[i].IsSelected"
                  color="white accent-4"
                ></v-checkbox>
            
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    
    selected1: []
  }),
  props: {
    value: {
        Array
    },
   
  },

    computed: {
        dataValue:{
            get() {
                return this.value
            },
            set(val) {
                // console.log('hte val : ', val);
                this.$emit('input', val)
            }
        }
    },

  created() {
   
    
    this.items = this.value
    this.selected1 = this.value
  },
  methods: {
      selectItem(item) {
          item.IsSelected = !item.IsSelected
          this.dataValue = this.selected1
          return  
      }
  }
};
</script>
