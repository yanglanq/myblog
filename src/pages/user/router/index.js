import Vue from 'vue'
import VueRouter from 'vue-router'
import content from "../components/content";
import articleDetail from "../components/articleDetail";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		component: content
	},
	{
		path: "/article/:id",// 通过id 传参
		name: "article",
		component: articleDetail
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
