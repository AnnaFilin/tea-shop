<template>
  <v-row>
    <v-col class="px-10 mx-5">
      <p class="text-h4 darkgrey--text">Hello {{ user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) }}</p>
      <v-divider class="mb-3"></v-divider>
      <!-- basic account info : name, email , password -->
      <p class="text-body-1 info--text">Email: {{user.email}}</p>
      <p class="text-body-1 info--text">Name: {{user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1)}}</p>
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
