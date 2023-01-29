const state = {
    users: [],
};

const getters = {
    userData: state => state.users
};

const mutations = {
    getData : (state, payload) => {
        state.users.push(payload);
    },
};

const actions = {
    getData: (context, payload) => {
        context.commit('getData', payload);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}