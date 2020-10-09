import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  show: false,
  HistoryCity: ["三亚", "北京"],
  city: "三亚",
  isLogon: false,
  UserName: ""
};

const mutations = {
  fun1() {
    state.show = !state.show;
  },
  localcity(state, n) {
    console.log(state.HistoryCity.indexOf(n));
    if (state.HistoryCity.indexOf(n) == -1) {
      state.HistoryCity.push(n);
    }
    state.city = n;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
