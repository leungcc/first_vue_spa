import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME](state, time) {
    state.totalTime += parseInt(time);
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME](state, time) {
    state.totalTime -= parseInt(time);
  },
  // 新增计划
  [types.SAVE_PLAN](state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    var defaultPlan = { name: '二哲', avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256', city: {id: 2, value: '深圳'} };
    state.list.push(Object.assign({}, defaultPlan, plan));
  },
  // 删除某计划
  [types.DELETE_PLAN](state, idx) {
    state.list.splice(idx, 1);
  }
}