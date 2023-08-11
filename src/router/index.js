import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CardDetails from "../views/CardDetails.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },

    {
        path: "/thing/:id",
        name: "CardDetails",
        component: CardDetails,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;