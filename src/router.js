import { createRouter, createWebHistory } from "vue-router";

import ShortLink from "./pages/shortlink/ShortLink.vue";
import FeebBack from "./pages/feedback/FeedBack.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/shorten" },
    { path: "/shorten", component: ShortLink },
    { path: "/feedback", component: FeebBack },
  ],
});

export default router;
