<template>
  <section class="select-wrap">
    <div class="searchIpt">
      <div class="clearfix">
        <div class="input-group">
          <input type="text" class="keyword form-control" v-model="keyword" @click="selectShow=!selectShow" placeholder="请输入城市名" />
          <input type="button" class="btn btn-info basic-addon2" :value="btnValue" @click="checkBtn">
        </div>
        <span></span>
      </div>
      <div v-show="selectShow" class="drop-panel">
        <ul>
          <li v-for="item in keywordList" :key="item.id" class="select-item" @click="selectItem(item, $event)">{{ item.value }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'xcselec',
    data() {
      return {
        keyword: '',
        selectShow: false,
        curSelect: null
      }
    },
    props: ['list', 'btnValue'],
    mounted() {
      this.$root.eventBus.$on('document.click', event => {
        if (!this.$el.contains(event.target)) this.selectShow = false;
      });
    },
    destroyed() {
      console.log("select destroyed")
    },
    computed: {
      keywordList() {
        return this.list.filter( item => {
          return (item.value.indexOf(this.keyword) !== -1)
        })
      }
    },
    methods: {
      selectItem(item, $event) {
        this.curSelect = item;
        this.selectShow = !this.selectShow;
        this.keyword = item.value;
      },
      checkBtn() {

        this.$root.eventBus.$emit("selectCheckBtn", this.$route.path, 'selectCity', this.keyword);
      }
    }
  }
</script>

<style>
  .searchIpt .select-item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding: 0 10px;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
  }
  .searchIpt .select-item:hover {
    color: #007bff;
  } 
  .select-wrap {
    position: relative;
  }
  .select-wrap .drop-panel {
    position: absolute;
    z-index: 999;
    background-color: #fff;
    border: 1px solid #ddd;
  }
</style>
