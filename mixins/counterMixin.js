export default {
    data: function() {
      return {
        dataValue: this.value,
        counter: 1,
       
      }
    },
    props: {
      value: Number,
    //   label: String,
    //   rules: Array
    },
    watch: {
      value: {
        immediate: true,
        handler: function(newValue) {
          this.dataValue = newValue
        }
      },
      counter() {
          this.dataValue = this.counter
          this.$emit('input',this.dataValue)
      }
    },

  }