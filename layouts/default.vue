<template>
  <v-app dark>
    <NavbarTop class="mb-16"/>
    <nuxt/>
  </v-app>
</template>

<script>
import NavbarTop from '@/components/Navigation/NavbarTop'

export default {
  components: { NavbarTop },

  data () {
    return {
     
    }
  }
}
</script>
