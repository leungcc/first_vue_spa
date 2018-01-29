
<!-- 侧边栏组件 -->

<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center"><span style="width:16px;height:16px;display:inline-block;" class="glyphicon glyphicon-time" aria-hidden="true"> </span>{{ $t("message.hasTime") }}</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{ time }} 小时</h1>
    </div>
  </div>
</template>

<script>
// 在 Sidebar.vue 我们需要通过 store　去获取总时间，我们的总时间是共享的数据
export default {
  computed: {
    time() {
      return this.$store.state.totalTime
    }
  }
}
</script>

