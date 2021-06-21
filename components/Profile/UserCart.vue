<template>
  <v-row>
    <v-col class="px-10 mx-5">
      <p class="text-h4 darkgrey--text">{{ user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) }}'s cart</p>
      <v-divider></v-divider>
      
      <div v-for="(item,i) in userCart" :key="i">
          <CartItem :item="item" @addQuantity="itemsInCart++" @reduceQantity="itemsInCart--"/>
          <v-divider v-if="i < cart.length-1"></v-divider>
      </div>
      <v-divider class="mb-5"></v-divider>
      <v-row align="center" class="pa-5 ma-3">
        <p>Total items in cart : {{ itemsInCart }}</p>
        <v-btn color="secondary lighten-2" depressed class="ma-5">Confirm order</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
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
        // cart: {
        //     type: Array
        // }
    },

    data() {
      return {
        itemsInCart: null
      }
    },

    computed: {
      ...mapState({
        cart: state => state.cartItems
      }),
      // ...mapGetters({
      //   cart: 'getCart'
      // }),
      cartSize() {
        return this.cart.length
      },
      userCart() {
        return this.cart
      }

    },

    mounted() {
      this.itemsInCart = this.cartSize
    },

    methods: {
      // handleChangeQuantity(quantity) {
      //   console.log('quantity ', quantity);
      //   this.itemsInCart 
      // }
    }
    
}
</script>