export default {
    namespaced: true,
    state: {
        users: [
            {
                id: 1,
                username: "afaferz",
                description: "Here is the description",
                loggedIn: false,
            },
        ],
    },
    mutations: {
        ADD_USER(state, user) {
            const hasUser = state.users.some((u) => u.username == user.username);
            const indexUser = state.users.indexOf((u) => u.username == user.username);
            if (hasUser) {
                state.users.splice(indexUser, 1);
            }
            state.users.push(user);
        },
    },
    actions: {},
    getters: {
        GET_USER: (state) => (userId) => {
            const hasUser = state.users.some(({ username }) => username === userId);
            if (hasUser) {
                return state.users.find(({ username }) => username === userId);
            } else {
                return {};
            }
        },
    },
};
