<template>
  <v-card class="pa-6 account-info" flat >
    <v-card-title class="accent--text">
      Login
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="userName"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox> -->

        <v-btn :disabled="!valid" color="primary" x-large tile depressed  class="mr-4" @click="validate">
          Login
          <!-- for now redirects to account for specific user -->
          <!-- nuxt auth is needed -->
          <!-- all signup and login logic + google/facebook later TODO -->
        </v-btn>
      </v-form>
    </v-card-text>
     <v-card-actions>
      <v-btn
        color="accent"
        text
      >
        Create account
      </v-btn>

      <v-btn
        color="accent"
        text
      >
        Forgot your password?
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    userName: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$router.push({ path: `/Account/${this.userName}` })
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="sass" scoped>
.account-info
    background: $gentle-bg !important
</style>
