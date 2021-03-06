import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/login";
import register from "../components/register";
Vue.use(VueRouter)

const routes = [
	{
		path: "/login.html",
		component: login
	},
	{
		path: "/login.html/login",
		redirect: "/login.html"
	},
	{
		path: "/login.html/register",
		component: register
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
