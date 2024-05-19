import { fetchUserData } from '@/api/user';

const state = {
  currentUser: {
    name: '',
    post: '',
    photo: '',
  },
};

const getters = {
  getCurrentUser: (state) => state.currentUser,
};

const mutations = {
  setUser(state, user) {
    state.currentUser = user;
  },
};

const actions = {
  async fetchCurrentUser({ commit }) {
    try {
      const user = await fetchUserData();
      commit('setUser', user);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
