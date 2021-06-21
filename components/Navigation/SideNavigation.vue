<template>
  <v-navigation-drawer permanent class="mt-3">
    <v-list nav class="" color="info">
      <v-list-item v-for="item in items" :key="item.title" nuxt :to="item.link">
        <v-list-item-content class="px-5 error--text text-h3">
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
        { title: "Orders", icon: "mdi-view-dashboard", link: '/Shop' },
        { title: "Whishlist", icon: "mdi-image" , link: '/Shop'},
        { title: "Account Info", icon: "mdi-help-box" , link: '/Shop'},
        { title: "Reviews", icon: "mdi-view-dashboard", link: '/Shop' },
        { title: "Addresses", icon: "mdi-image" , link: '/Shop'}, // ?
        { title: "Favorites", icon: "mdi-help-box" , link: '/Shop'}, // ?
        { title: "Shop", icon: "mdi-view-dashboard", link: '/Shop' },
        { title: "Traditions", icon: "mdi-image" , link: '/Traditions'},
        { title: "About", icon: "mdi-help-box", link: '/About' },
        { title: "Contact", icon: "mdi-view-dashboard" , link: '/Shop'},
        { title: "Home", icon: "mdi-view-dashboard" , link: '/Shop'},
        { title: "Cart", icon: "mdi-image" , link: '/Shop'}
      ],
      right: null
    };
  }
};
</script>
