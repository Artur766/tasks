import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
    currentUser: {
      name: 'Барнаби Мармадюк',
      post: 'Преподователь',
      photo: ''
    }
  },
  getters: {
    getPosts: state => state.posts,
    getCurrentUser: state => state.currentUser
  },
  mutations: {
    createPost(state, post) {
      state.posts = [...state.posts, post];
    },
    deletePost(state, idPost) {
      state.posts = state.posts.filter(post => post.id !== idPost);
    },
    saveEdit(state, editedPost) {
      state.posts = state.posts.map(post =>(editedPost.id === post.id ? editedPost : post));
    },
    loadPostsFromLocalStorage(state) {
      const storedPosts = localStorage.getItem('posts');
      state.posts = storedPosts ? JSON.parse(storedPosts) : [];
    },
    savePostsToLocalStorage(state) {
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
  },
  actions: {
    createPost ({ commit }, post) {
      commit("createPost", post);
      commit("savePostsToLocalStorage");
    },
    deletePost ({commit}, idPost) {
      commit("deletePost", idPost);
      commit("savePostsToLocalStorage");
    },
    saveEdit ({commit}, editedPost) {
      commit("saveEdit", editedPost);
      commit("savePostsToLocalStorage");
    },
    loadPostsFromLocalStorage ({commit}){
      commit("loadPostsFromLocalStorage");
    }
  },
});