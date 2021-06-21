<template>
  <v-container class="mt-10 mx-auto" fluid>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <Signup class="ma-16 px-16"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Signup from '@/components/HomePage/Registrations/Signup'

export default {
  layout: 'userProfile',
  components: {
      Signup
  },
  data() {
    return {
   
    
    }
  },
  
};
</script>

<style></style>
