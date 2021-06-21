<template>
  <v-row>
    <v-col class="px-10 mx-5">
      <p class="text-h4 darkgrey--text ">{{ user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) }}'s Addresses for shipping</p>
      <v-divider class="mb-3"></v-divider>
      <p class="text-body-1 info--text">First Address: {{userAddress}}</p>
      <!-- <p>Second Address</p> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'UserAddressBook',
    props: {
        user: {
            type:  Object
        }
    },
    computed: {
        userAddress() {
            return this.user.address.city + ', ' + this.user.address.street + ', ' + this.user.address.number
        }
    }
    
}
</script>
