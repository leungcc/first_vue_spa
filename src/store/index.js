import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex);

// 先写个假数据
const state = {
  totalTime: 9,
  list: [
      {
        name: '二哲',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        city: { id: 2, value: '深圳' },
        date: '2017-12-25',
        totalTime: 6,
        comment: '12 月 25 日完善，陪女朋友一起过圣诞节需要 6 个小时'
      },
      {
        name: 'xc leung',
        avatar: 'https://avatars2.githubusercontent.com/u/20238166?s=460&v=4',
        city: { id: 1, value: '广州' },
        date: '2017-12-27',
        totalTime: 3,
        comment: '今晚坐车回家'
      },
      {
        name: 'haha mummy',
        avatar: '../../static/images/hahamummy.jpg',
        city: { id: 999, value: '山卡拉' },
        date: '2017-12-27',
        totalTime: 2,
        comment: '煮饭饭比哈哈食'
      }
  ]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})