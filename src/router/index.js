import { createRouter, createWebHashHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostWriteView from "../views/PostWriteView.vue";
const routes = [
  {
    path: "/",
    component: PostListView
  },
  {
    path: "/write",
    component: PostWriteView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
