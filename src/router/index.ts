import TestA from "@/views/TestA.vue";
import TestB from "@/views/TestB.vue";
import TestC from "@/views/TestC.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/test-a",
    name: "test-a",
    component: TestA,
  },
  {
    path: "/test-b",
    name: "test-b",
    component: TestB,
  },
  {
    path: "/test-c",
    name: "test-c",
    component: TestC,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
