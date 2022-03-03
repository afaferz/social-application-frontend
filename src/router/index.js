import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
const routes = [
    {
        path: "/posts",
        name: "Posts",
        component: () => import(/* webpackChunkName: "posts" */ "../views/Posts.vue"),
    },
    {
        path: "/user/:userId",
        name: "User",
        component: () => import(/* webpackChunkName: "user:userId" */ "../views/User.vue"),
        props: true,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/IS_LOGGED_IN"]) {
                next({ name: "Login" });
            } else {
                next();
            }
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
        beforeEnter: (to, from, next) => {
            if (store.getters["auth/IS_LOGGED_IN"]) {
                next({ name: "Posts" });
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters["auth/IS_LOGGED_IN"];
    if (!isLoggedIn && to.name !== "Login" && to.name !== "Posts") next({ name: "Login" });
    else next();
});

export default router;
