/*
 * @Descripttion:
 * @Author: heidous
 * @Date: 2020-07-27 17:38:03
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-27 17:57:11
 */
const state = {
  msg: 'hello world',
  count: 0
};
const mutations = {
  SET_MESSAGE: (state, newMsg) => {
    state.msg = newMsg;
  },
  ADD_COUNT: (state) => {
    state.count++;
  },
  DEL_COUNT: (state) => {
    state.count--;
  }
};
const actions = {
  setMessage({ commit }) {
    commit('SET_MESSAGE');
  }
};
export default {
  namespace: true,
  state,
  mutations,
  actions
};
