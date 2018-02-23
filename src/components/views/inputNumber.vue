<template>
  <input class="inputNumber" v-model="myvalue" @input="handleInput($event)">
</template>

<script>
export default {
  name: 'inputNumber',
  props: {
    value: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      myvalue: this.value
    }
  },
  methods: {
    handleInput(e) {
      //this.myvalue = e.target.value;
      
      console.log(e.target.value+' .. '+this.myvalue);
      this.myvalue = this.myvalue.replace(/\D+/g, '');
      this.myvalue = this.myvalue ? parseInt(this.myvalue) : this.myvalue;
      if(this.myvalue < 0) {
        this.myvalue = 0;
      }
      if(this.myvalue > 100) {
        this.myvalue = 100;
      }
      console.log(typeof this.myvalue)
      console.log('e.target.value+ .. '+this.myvalue);
      this.$emit('change', this.myvalue);
    },
    changeMyvalue() {
      this.myvalue = 520;
    }
  },
  watch: {
    value(val) {
      this.myvalue = val;
    }
  }
}
</script>

<style>
.inputNumber {
  width: 60px;
}
</style>
