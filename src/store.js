
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
        }
    },
    mutations: {
        registerPost(state, post) {
            console.log(post);
            state.posts.push(post);
        },
    }
})
