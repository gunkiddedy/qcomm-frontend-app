const state = {
    userInformation: [],
};

const getters = {
    userData: state => state.userInformation,
};

const mutations = {
    AFTER_LOGIN : (state, payload) => {
        state.userInformation.push(payload);
        // state.userRole = payload.user.role;
        // state.userId = payload.user.id;
        // localStorage.setItem('username', payload.user.name);
        // localStorage.setItem('user_id', payload.user.id);
        // localStorage.setItem('isloggedIn', 'true');
    },
    AFTER_LOGOUT: (state) => {
        state.userInformation = [];
        // state.userRole = '';
        // state.userId = '';
        // state.companyName = '';
        localStorage.removeItem('userdata');
        // localStorage.removeItem('user_id');
        // localStorage.removeItem('isloggedIn');
        // localStorage.removeItem('user_role');
    }
};

const actions = {
    afterLogin: (context, payload) => {
        context.commit('AFTER_LOGIN', payload);
    },

    afterLogout: context => context.commit('AFTER_LOGOUT')
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}