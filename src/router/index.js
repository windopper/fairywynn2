import { createRouter, createWebHashHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostWriteView from "../views/PostWriteView.vue";
import PostReadView from '../views/PostReadView.vue';
const routes = [
  {
    path: "/",
    component: PostListView
  },
  {
    path: "/write",
    component: PostWriteView
  },
  {
    path: '/post/:id',
    component: PostReadView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
