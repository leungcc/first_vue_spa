<template>
  <div class="score-filter">
    <span>比分</span>
    <inputNumber :value="myminScore" @change="changeMinScore"/>
    <em>-</em>
    <inputNumber :value="mymaxScore"/>
  </div>
</template>

<script>
import inputNumber from '@/components/views/inputNumber'

export default {
  name: 'scoreFilter',
  props: {
    minScore: {
      default: 0,
      type: Number
    },
    maxScore: {
      default: 100,
      type: Number
    }
  },
  data() {
    return {
      myminScore: this.minScore,
      mymaxScore: this.maxScore
    }
  },
  methods: {
    changeMinScore(val) {
      console.error(val)
      this.$emit("changeMinScore", val);
    }
  },
  watch: {
    minScore(value) {
      this.myminScore = value;
    }
  },
  components: {
    inputNumber
  }
}
</script>

<style>

</style>
