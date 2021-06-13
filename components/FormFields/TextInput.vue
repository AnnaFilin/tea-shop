<template>
     <v-text-field
        v-model="dataValue"
        v-bind="$attrs"
        dense
        type="text"
        :label="label"
        outlined
        background-color="white"
        :rules="rules ? rules : []"
        v-on="$listeners"
    ></v-text-field>
</template>

<script>
import inputMixin from "@/mixins/inputMixin.js";

export default {
  mixins: [inputMixin],
};
</script>