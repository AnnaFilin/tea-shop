<template>
  <v-container class="mx-auto px-10">
    <v-sheet class="account-info pa-10 darkgray--text">
      <v-row>
        <v-col cols="12" md="6">
          <!-- <p >Hello  {{ userName.toUpperCase() }}</p> -->

          <UserBaseInfo :user="user" />

          <!-- option to edit info -->
          <v-row>
            <v-col class="px-10 mx-5">
              <p class="extand text-h5 darkgrey--text" @click="openUpdateDetails = !openUpdateDetails">
                Update Base Details
              </p>
              <!-- UpdateBaseUserDetails -->
              <UpdateBaseUserDetails v-if="openUpdateDetails" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
         
          <UserAddressBook :user="user" />
          <v-row>

            <v-col class="px-10 mx-5">
              <p class="extand text-h5 darkgrey--text" @click="openUpdateAddress = !openUpdateAddress">
                Update Address
              </p>
              <UpdateAddress v-if="openUpdateAddress" />
              <!-- <p class="extand text-h5 darkgrey--text" @click="openAddAddress = !openAddAddress">
                Add Address
              </p>
              <UpdateAddress v-if="openAddAddress" /> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
          <v-col class="px-10 mx-5">
              <p class="extand text-h5 darkgrey--text" @click="openCart = !openCart">
                <span v-show="!openCart">Open Cart</span>
                <span v-show="openCart">Close Cart</span>
               
              </p>
              <UserCart v-if="openCart" :cart="cart" :user="user" />
          </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import axios from "axios";
import UserBaseInfo from "@/components/Profile/UserBaseInfo";
import UserAddressBook from "@/components/Profile/UserAddressBook";
import UserCart from "@/components/Profile/UserCart";
import UpdateBaseUserDetails from "@/components/Profile/UpdateBaseUserDetails";
import UpdateAddress from "@/components/Profile/UpdateAddress";

export default {
  layout: "userProfile",
  components: {
    UserBaseInfo,
    UserAddressBook,
    UserCart,
    UpdateBaseUserDetails,
    UpdateAddress
  },

  data() {
    return {
      openUpdateDetails: false,
      openUpdateAddress: false,
      openAddAddress: false,
      openCart: false
    };
  },

  created() {
    this.$store.dispatch('fetchUserCart');
  },

  computed: {
    userName() {
      return this.$route.params.user;
    }
  },

  async asyncData() {
    const { data } = await axios.get("https://fakestoreapi.com/carts/5");
    const user = await axios.get("https://fakestoreapi.com/users/1");
    // console.log("user :", user.data);
    const userData = user.data;
    return {
      cart: data.products,
      user: userData
    };
  },

  methods: {
  }
};
</script>

<style lang="sass" scoped>
.account-info
    background: $gentle-bg !important
.extand
    cursor: pointer
</style>
