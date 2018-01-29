
<!-- 导航栏组件 -->

<template>
  <div>
    <ul class="language-nav">
      <li class="fl" @click="changeLang('cn')">{{ $t("language.chinese") }}<span>|</span></li>
      <li class="fl" @click="changeLang('en')">{{ $t("language.english") }}<span></span></li>
    </ul>
    <ul class="nav navbar-nav">
      <li><router-link to="/home">{{ $t("header.index") }}</router-link></li>
      <li><router-link to="/time-entries">{{ $t("header.planList") }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  methods: {
    changeLang(lang) {
      this.$root.$i18n.locale = lang.toUpperCase();
    }
  }
}
</script>


