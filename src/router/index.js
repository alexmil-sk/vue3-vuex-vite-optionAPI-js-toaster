import {
	createRouter,
	createWebHistory
} from "vue-router";

const routes = [{
	path: "/",
	name: "home",
	component: () => import("../pages/Home.vue"),
}, {
	path: "/contact",
	name: "contact",
	component: () => import("../pages/Contact.vue")
}]

export const router = createRouter({
	routes,
	history: createWebHistory(),
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
});
