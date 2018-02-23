import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

console.warn(zh)
// Validator.addLocale(zh);
Validator.localize(zh.name, {
  messages: Object.assign(zh.messages, {
    email(n) {
      return `这是个有毒邮箱`
    }
  }),
  attributes: Object.assign(zh.attributes, {
    email: '邮箱'
  })
});
Validator.localize('zh_CN');




const config = {
  locale: 'zh_CN'
}

Vue.use(VeeValidate, config)

alert("init ")