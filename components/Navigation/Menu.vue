<template>
    <v-menu offset-y open-on-click open-on-hover class="menu-drop">
         
      <template v-slot:activator="{ on, attrs }">
        <v-btn text x-large v-bind="attrs" v-on="on">
          {{ menuName }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-btn x-large nuxt block text :to="item.link" width="100%">
                {{ item.title }}
            </v-btn> 
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menuItems: {
      type: Array
    },
    menuName: {
      type: String
    }
  }
};
</script>
