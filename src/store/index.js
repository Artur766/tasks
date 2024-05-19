import { createStore } from 'vuex';

export default createStore({
  state: {
    currentUser: {
      name: 'Барнаби Мармадюк',
      post: 'Преподователь',
      photo: '',
    },
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,
  },
  mutations: {},
  actions: {},
});
