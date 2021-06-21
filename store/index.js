import axios from 'axios'

export const state = () => ({

    allProducts: [],
    // featuredProducts: [],
    // menProducts: [],
    // womenProducts: [],
    cartItems: [],
  })
  export const getters = {
    /* 
      return items from store
    */
    allProducts: (state) => state.allProducts,
    // featuredProducts: (state) => state.featuredProducts,
    // menProducts: (state) => state.menProducts,
    // womenProducts: (state) => state.womenProducts,
    getCart: (state) => state.cartItems,
    // getCartTotal: (state) =>
    //   state.cartItems.length < 1
    //     ? '0'
    //     : state.cartItems
    //         .map((el) => el.price * el.quantity)
    //         .reduce((a, b) => a + b),
  }
  export const actions = {
    async addItemToCart({ commit }, cartItem) {
      console.log('add item : ', cartItem);
      await commit('setCartItem', cartItem)
    },
    // async deleteCartItem({ commit }, id) {
    //   await commit('removeCartItem', id)
    // },
    async fetchUserCart( { commit } ) {
      console.log('fetching');
      await axios.get('https://fakestoreapi.com/carts/user/2').then(result => {
        console.log('res : ', result.data[0]);
        const { products } = result.data[0]
        commit('setCart', products);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  }
  export const mutations = {
    setCart: (state, cart) => state.cartItems = cart,
    // setProducts: (state, products) => (state.allProducts = products),
    // setFeaturedProducts: (state, products) => (state.featuredProducts = products),
    // setMenProducts: (state, products) => (state.menProducts = products),
    // setWomenProducts: (state, products) => (state.womenProducts = products),
    setCartItem: (state, item) => state.cartItems.push(item),
    // removeCartItem: (state, id) =>
    //   state.cartItems.splice(
    //     state.cartItems.findIndex((el) => el.id === id),
    //     1
    //   ),
  }