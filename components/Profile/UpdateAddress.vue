<template>
    <v-form>
        <TextInput v-model="city" :label="'city'"/>
        <TextInput v-model="street" :label="'street'"/>
        <TextInput v-model="number" :label="'number'"/>
    </v-form>
</template>

<script>
import TextInput from '@/components/FormFields/TextInput.vue';

export default {
    name: 'UpdateOrAddAddress',
    components: {
        TextInput
    },
    data() {
        return {
            city: undefined,
            number: undefined,
            street: undefined
        }
    }
}
</script>