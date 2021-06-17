export default {
    data: function() {
      return {
        dataValue: this.value,
        counter: 1
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
          console.log('change : ', newValue);
          this.dataValue = newValue
          
        }
      },
      counter() {
        console.log('adding... : ');
          this.dataValue = this.counter
          console.log('dataval = ', this.dataValue);
          this.$emit('input',this.dataValue)
      }
    },

  }