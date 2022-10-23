import { createRouter, createWebHashHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostWriteView from "../views/PostWriteView.vue";
import PostReadView from '../views/PostReadView.vue';
import PostEditView from '../views/PostEditView.vue';
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
  },
  {
    path: '/edit/:id',
    component: PostEditView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
