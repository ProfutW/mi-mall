import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index,
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import("../views/Product.vue"),
      },
      {
        path: "/detail/:id",
        name: "detail",
        component: () => import("../views/Detail.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/Order.vue"),
    children: [
      {
        path: "list",
        name: "order-list",
        component: () => import("../views/OrderList.vue"),
      },
      {
        path: "confirm",
        name: "order-confirm",
        component: () => import("../views/OrderConfirm.vue"),
      },
      {
        path: "pay",
        name: "order-pay",
        component: () => import("../views/OrderPay.vue"),
      },
      {
        path: "alipay",
        name: "alipay",
        component: () => import("../views/Alipay.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
