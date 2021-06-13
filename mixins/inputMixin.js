export default {
    data: function() {
      return {
        dataValue: this.value
      }
    },
    props: {
      value: String,
      label: String,
      rules: Array
    },
    watch: {
      value: {
        immediate: true,
        handler: function(newValue) {
          this.dataValue = newValue
        }
      }
    }
  }