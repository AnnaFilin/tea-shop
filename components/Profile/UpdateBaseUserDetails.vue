<template>
    <v-form>
        <TextInput v-model="firstname" :label="'first name'"/>
        <TextInput v-model="lastname" :label="'last name'"/>
        <TextInput v-model="email" :label="'email'"/>
    </v-form>
</template>

<script>
import TextInput from '@/components/FormFields/TextInput.vue';

export default {
    name: 'UpdateBaseUserDetails',
    components: {
        TextInput
    },
    data() {
        return {
            firstname: undefined,
            lastname: undefined,
            email: undefined
        }
    }
}
</script>