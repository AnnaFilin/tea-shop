export default {
   
    props: {
        items: Array,
        multiple: Boolean,
        value: [String , Array, Number, Object],
        label: String,
        rules: Array,
    },

    computed: {
        dataValue: {
          get () {
            return this.value
          },
          set (val) {
            this.$emit('input', val)
          }
        }
      },
 
    }
  