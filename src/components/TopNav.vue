
<!-- 导航栏组件 -->

<template>
  <ul class="nav navbar-nav">
    <li><router-link to="/home">首页</router-link></li>
    <li><router-link to="/time-entries">计划列表</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>


