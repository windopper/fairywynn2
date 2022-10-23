import { createStore } from "vuex";


export const store = new createStore({
  state() {
    return {
      posts: [],
      bookMarks: []
    };
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    getPostById: state => id => {
      return state.posts.filter(post => post.id === id)[0];
    },
    getPostsByTitle: state => title => {
      return state.posts.filter(post => post.title.includes(title));
    },
    getPostsByBookMarked: state => {
      return state.posts.filter(post => state.bookMarks.includes(post.id))
    },
    bookMarks(state) {
      return state.bookMarks;
    },
    isBookMarked: state => id => {
      return state.bookMarks.includes(id);
    }
  },
  mutations: {
    registerPost(state, post) {
      const currentDate = Date.now();
      post.date = currentDate;
      state.posts.unshift(post);
    },
    deletePost(state, id) {
      state.posts = state.posts.filter(post => post.id !== id);
    },
    editPost(state, newPost) {
      state.posts = state.posts.map(post => {
        if(post.id !== newPost.id) return post;
        return newPost
      })
    },
    addBookMark(state, id) {
      state.bookMarks.unshift(id);
    },
    removeBookMark(state, id) {
      state.bookMarks = state.bookMarks.filter(bookMarkId => bookMarkId !== id)
    }
  },
});
