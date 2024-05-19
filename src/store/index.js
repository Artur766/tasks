import { createStore } from 'vuex';
import userModule from './modules/user.js';

export default createStore({
  modules: {
    user: userModule,
  },
});
