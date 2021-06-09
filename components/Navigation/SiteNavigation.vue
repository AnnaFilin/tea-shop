<template>
    <v-btn-toggle
        tile
        group
    >
        <Menu :menuName="shop" :menuItems="shopCategories" class="px-2 mx-3"/>
        <v-btn
            text
            x-large class="px-2 mx-3"
            to="/About"
            nuxt
        >
        About
        </v-btn>
        <v-btn
            text
            x-large class="px-2 mx-3"
            to="/Stories"
            nuxt
        >
        Stories
        </v-btn>
        
        <Menu :menuName="traditions" :menuItems="traditionsList" class="px-2 mx-3"/>
    </v-btn-toggle>
</template>


<script>
import Menu from '@/components/Navigation//Menu.vue';


export default {
  components: { Menu },
  name: "SiteNavigation",
  data() {
      return {
          shopCategories: [
              {
                  title: 'Oolong',
                  link: '/Shop/oolong',
              },
              {
                  title: 'Green',
                  link: '/Shop/green',
              },
              {
                  title: 'Puerh',
                  link: '/Shop/puerh',
              },
              {
                  title: 'Matcha',
                  link: '/Shop/matcha',
              },
              {
                  title: 'Most Popular',
                  link: '/Shop/most-popular',
              },
          ],
          shop: 'Shop',
          traditionsList: [
              {
                  title: 'China',
                  link: '/Traditions/china'
              },
              {
                  title: 'Africa',
                  link: '/Traditions/africa'
              },
              {
                  title: 'Japan',
                  link: '/Traditions/japan'
              },
              {
                  title: 'Middle East',
                  link: '/Traditions/middle-east'
              },
          ],
          traditions: 'Traditions'
      }
  }
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
