
<!-- 计划列表组件 -->

<template>
  <div>
    <router-link 
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary"
    >{{ $t("button.create") }}</router-link>
    <button class="btn btn-default" @click="showModal()">Modal</button>
    <el-button type="primary" @click.native="tx1_login()">登录tx1</el-button>
    <el-button type="warning" @click.native="tx1_test()">tx1-api</el-button>
    <el-button type="danger" @click.native="tx1_logout()">登出</el-button>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>{{ $t("button.create") }}</h3>
    </div>

    <hr>

    <div class="filter-panel">
      <xcselect :list="selectCitys" :btnValue="$t('button.search')"></xcselect>  
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>
      <div class="list-group">
        <a class="list-group-item" v-for="(plan, index) in plans" :key="index">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
              <p class="city-p">
                {{ plan.city.value }}
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>
            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deletePlan(index)"
              >X</button>
            </div>
          </div>
        </a>
      </div>
    </div>


    <modal v-show="isShowModal" @close="closeModal()" />
  </div>

  
</template>

<script>
  
  import cityList from './../../static/staticData/city'
  import { tx1_test, tx1_login } from './../api'
  import md5 from 'js-md5';

  export default {
    name: 'TimeEntries',
    mounted() {
      // 城市查询
      this.$root.eventBus.$on("selectCheckBtn", (path, type, value) => {
        if(path !== '/time-entries')return;
        
        if(type === 'selectCity') {
          if(!value) {
            this.planList = this.$store.state.list;
          }
          this.planList = this.$store.state.list.filter(listItem => {
            return (listItem.city.value.indexOf(value) !== -1)
          })
        }
      });
    },
    data() {
      return {
        selectCitys: cityList,
        planList: this.$store.state.list,
        isShowModal: false
      }
    },
    computed: {
      plans() {
        // 从 store 中取出数据
        return this.planList
      },
    },
    methods: {
      deletePlan(idx) {
        // 减去总时间
        this.$store.dispatch('decTotalTime', this.plans[idx].totalTime)
        // 删除该计划
        this.$store.dispatch('deletePlan', idx)
      },
      showModal() {
        this.isShowModal = true;
      },
      closeModal() {
        this.isShowModal = false;
      },
      // 测试 tx1 的 api
      tx1_test() {
        tx1_test({
          command: 'GetSystemStatus',
          content: {},
          version: '1.0'
        })
          .then((res)=>{
            console.log(res);
          })
      },
      // 测试 tx1 的 登录
      tx1_login() {
        tx1_login({
          "version": "1.0",
			    "command": "Login",
			    "content":{
            "username": "admin",
            "passwd": md5("admin"+"&"+"snemface")
          }
        })
          .then((res)=>{
            console.warn(res);
          })
      },
      // 测试 tx1 的 登出
      tx1_logout() {
        
      }
    }
  }
  
</script>

<style>
 .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }

  .filter-panel {
    height: 40px;
  }
</style>


