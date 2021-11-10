import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
    },
    {
        path: "/Home",
        name: "Home",

        component: () =>
            import ("../views/Home.vue"),
        meta: { requireAuth: true },
    },
    {
        path: "*",
        redirect: "/",
    },
];

NProgress.start();
NProgress.set(0.4);
NProgress.inc();
NProgress.done();

const router = new VueRouter({
    routes,
});
//鉤子函式，訪問路由前呼叫
router.beforeEach(async(to, from, next) => {
    // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
    console.log("to: ", to);
    console.log("from: ", from);
    //路由需要認證
    if (to.meta.requireAuth) {
        const jwt = localStorage.getItem("jwt");

        //判斷store裡是否有token
        if (jwt) {
            // console.log("ok");
            if (jwt.length > 0) {
                next();
            } else {
                next({ name: "Login" });
            }
        } else {
            next({ name: "Login" });
        }
    } else {
        next();
    }
    NProgress.start();
    NProgress.set(0.4);
    NProgress.inc();
    NProgress.done();
});

export default router;