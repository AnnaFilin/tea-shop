<template>
  <v-row>
    <v-col class="px-10 mx-5">
      <p>{{ user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) }}'s cart</p>
      <v-divider></v-divider>
      
      <div v-for="(item,i) in cart" :key="i">
          <CartItem :item="item" />
          <v-divider v-if="i < cart.length-1"></v-divider>
      </div>
    </v-col>
  </v-row>
</template>


<script>
import CartItem from '@/components/Profile/CartItem'

export default {
    name: 'UserCart',
    components: {
        CartItem
    },
    props: {
        user: {
            type:  Object
        },
        cart: {
            type: Array
        }
    },
    
}
</script>