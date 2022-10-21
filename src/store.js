
import { createStore } from 'vuex';

export const store = new createStore({
    state() {
        return {
            posts: [],
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        },
        getPostById: (state) => (id) => {
            return state.posts.filter(post => post.id === id)[0];
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
        }
    }
})
