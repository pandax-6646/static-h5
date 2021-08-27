import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    uid: "",
  },

  mutations: {
    // 更新token
    updateToken(state, paylod) {
      state.token = paylod;
    },

    // 更新用户 uid
    updateUid(state, payload) {
      state.uid = payload;
    },
  },
});
