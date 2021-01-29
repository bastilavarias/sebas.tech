import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Home"),
    children: [
      {
        path: "",
        name: "About Page",
        component: () => import("@/views/About")
      },

      {
        path: "blog",
        name: "Blogs Page",
        component: () => import("@/views/Blogs")
      },

      {
        path: "blog/:slug",
        name: "Blog Item Page",
        component: () => import("@/views/BlogItem")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
