import { createStore } from 'vuex';
import { fetchUserData } from '../api/user';

export default createStore({
  state: {
    currentUser: {
      name: '',
      post: '',
      photo: '',
    },
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const user = await fetchUserData();
        commit('setUser', user);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
