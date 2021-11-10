import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        single: [],
        lists: [],
        authority: {},
        backToOne: 0,
    },
    mutations: {
        tableData(state, data) {
            state.single = data;
        },
        tableDatas(state, data) {
            state.lists = data;
        },
        accessToken(state, data) {
            state.authority = data;
        },
        BACK_TO_ONE(state, data) {
            state.backToOne = data;
        },
    },
    actions: {},
    modules: {},
});