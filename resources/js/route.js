import Vue from "vue"
import VueRouter from "vue-router"
import not from "./components/notfound"

// const Home = () => import('./components/home')
// const Detail=()=>import('./components/Detail')
	
// {path:'/', name : 'home', component:h1},
// 	{path:'/dd', name : 'home', component:h2}

Vue.use(VueRouter)

const routes=[
 {path:'/', name : 'home', component: () => System.import('./components/home') },
 {path:'/dd/:id?', name : 'detail', component:()=>System.import('./components/Detail')},
 { path: '*', name:'404' , component: not }
]


const router = new VueRouter({
	mode: 'history',
	routes,
	hashback:true
	
})	
	

export default router