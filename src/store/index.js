import { createStore } from 'vuex';
import auth from './auth';
import posts from './posts';
import users from './users';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    posts,
    users,
  },
});
