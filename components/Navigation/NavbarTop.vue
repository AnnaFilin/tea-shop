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
          
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
          <!-- <v-btn text height="100%" class="navbar-link d-none d-md-flex" to="/">
            Home
          </v-btn> -->
          <!-- <v-btn
            text
            height="100%"
            class="navbar-link d-none d-md-flex"
            to="/About"
          >
            About
          </v-btn>
          <v-btn
            text
            height="100%"
            class="navbar-link d-none d-md-flex"
            to="/Stories"
          >
            Stories
          </v-btn>
          <v-btn
            text
            height="100%"
            class="navbar-link d-none d-md-flex"
            to="/Shop"
          >
            Shop
          </v-btn> -->
        </v-app-bar>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "NavbarTop"
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
