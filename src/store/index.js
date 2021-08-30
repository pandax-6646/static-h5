import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    phone: "",
  },

  mutations: {
    // 更新token
    updateToken(state, paylod) {
      state.token = paylod;
    },

    // 更新phone
    updatePhone(state, payload) {
      state.phone = payload;
    },
  },
  plugins: [createPersistedState()],
});
