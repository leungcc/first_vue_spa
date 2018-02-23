<template>
  <div class="alarmmgr">
    <div class="filter-panel">
      <scoreFilter 
        :minScore="filter_scoreMin" 
        :maxScore="filter_scoreMax" 
        @changeMinScore="mychangeMinScore"
        @changeMaxScore="mychangeMaxScore"
      />
    </div>
    <div class="toolbar-panel"></div>
    <div class="alarm-list-panel">

    </div>
  </div>
</template>

<script>
import scoreFilter from '@/components/scoreFilter'

export default {
  name: 'alarmmgr',
  data() {
    return {
      filter_scoreMin: 20,
      filter_scoreMax: 90
    }
  },
  components: {
    scoreFilter
  },
  methods: {
    mychangeMaxScore(value) {
      this.filter_scoreMax = value;
    },
    mychangeMinScore(value) {
      this.filter_scoreMin = value;
    }
  }
}
</script>

<style>
.filter-panel {
  height: 40px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
}
</style>
