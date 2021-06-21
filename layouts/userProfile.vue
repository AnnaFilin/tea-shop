<template>
  <v-app dark>
    <NavbarTop class="mb-16" />
    <v-container class="mt-10">
      <v-row>
        <v-col cols="2">
          <SideNavigation :user="user" />
        </v-col>
        <v-col cols="10">
          <nuxt />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavbarTop from "@/components/Navigation/NavbarTop";
import SideNavigation from "@/components/Navigation/SideNavigation";

export default {
  components: { NavbarTop, SideNavigation },

  data() {
    return {};
  },
  computed: {
    user() {
      return this.$route.params.user;
    }
  }
};
</script>
