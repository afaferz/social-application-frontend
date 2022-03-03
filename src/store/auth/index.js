export default {
    namespaced: true,
    state: {
        user: {
            id: 1,
            username: "afaferz",
            description: "Here is the description",
            loggedIn: false,
        },
    },
    mutations: {
        LOGIN(state) {
            state.user.loggedIn = true;
        },
        LOGOUT(state) {
            state.user.loggedIn = false;
        },
    },
    actions: {
        async login({ commit }) {
            commit("LOGIN");
        },
        async logout({ commit }) {
            commit("LOGOUT");
        },
    },
    getters: {
        CURRENT_USER: (state) => state.user,
        IS_LOGGED_IN: (state) => (!state.user ? false : state.user.loggedIn),
    },
};
