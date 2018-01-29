import VueI18n from 'vue-i18n'

import Vue from 'vue'

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'CN', // 语言标识
  messages: {
    'CN': require('./lang/cn.js'),
    'EN': require('./lang/en.js')
  }
})