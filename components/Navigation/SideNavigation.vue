<template>
  <v-navigation-drawer permanent>
    <!-- <v-list-item-title class="text-h6">
        Welcome {{ user }} !
    </v-list-item-title>  -->
    <v-list nav dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNavigation",
  props: {
      user: {
          type: String, Object
      }
  },
  data() {
    return {
      items: [
        { title: "Orders", icon: "mdi-view-dashboard" },
        { title: "Whishlist", icon: "mdi-image" },
        { title: "Account Info", icon: "mdi-help-box" },
        { title: "Reviews", icon: "mdi-view-dashboard" },
        { title: "Addresses", icon: "mdi-image" }, // ?
        { title: "Favorites", icon: "mdi-help-box" }, // ?
        { title: "Shop", icon: "mdi-view-dashboard" },
        { title: "Traditions", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
        { title: "Contact", icon: "mdi-view-dashboard" },
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "Cart", icon: "mdi-image" }
      ],
      right: null
    };
  }
};
</script>
