<template>
  <v-row>
    <v-col class="px-10 mx-5">
      <p>Hello {{ user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) }}</p>
      <v-divider></v-divider>
      <!-- basic account info : name, email , password -->
      <p>Email: {{user.email}}</p>
      <!-- <p>Name: </p> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'UserBaseInfo',
    props: {
        user: {
            type:  Object
        }
    },

}
</script>
