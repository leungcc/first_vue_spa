<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#/luanlai">
          <i class="glyphicon glyphicon-time"></i>
          {{ $t("common.planPanel") }}
        </a>
        <!-- 导航栏 -->
        <TopNav/>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <!-- 侧边栏 -->
          <sidebar></sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Vue from 'vue'


export default {
  name: 'App',
  components: { TopNav, Sidebar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
