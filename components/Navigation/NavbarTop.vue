<template>
  <v-container
    grid-list-xs
    fluid
    class="grid-list-xl text-center nav-wrapper"
    py-2
  >
    <v-layout align-start justify-center mb-0 pa-0 ma-0 class="nav-items">
      <v-row>
        <v-app-bar color="light" height="120" prominent flat fixed>
          <v-toolbar-title class="align-self-center">
            <v-btn
              text
              to="/"
              x-large
              plain
              class="text-h2"
            >
              TEA SHOP
            </v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          
      <v-btn icon nuxt :to="'/Account'">
         <!-- @click="signupDialog = !signupDialog" -->
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
        </v-app-bar>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "NavbarTop",
 
  data() {
    return {
    }
  },

};
</script>
<style lang="sass" scoped>

.v-toolbar__items
  align-items: flex-end

.v-toolbar__content
  height: auto !important
  padding: 0 !important
  justify-content: space-between

.navbar-link
    align-self: center
</style>
