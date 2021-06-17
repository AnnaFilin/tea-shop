<template>
    <div>
        <p>Total : {{ price }} $</p>
    </div>
</template>

<script>
export default {
    name: 'TotalCalculator',
    props: {
        priceOfProduct: {
            type: Number
        },
        quantity: {
            type: Number
        },

    },
    computed: {
        price() {
            return (this.priceOfProduct * this.quantity).toPrecision(2);
        }
    }
}
</script>