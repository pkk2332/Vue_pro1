import Vue from "vue"
import VueRouter from "vue-router"

import h1 from './components/home'
import h2 from './components/Detail'

// const Home = () => import('./components/home')
// const Detail=()=>import('./components/Detail')
	// {path:'/', name : 'home', component: () => System.import('./components/home') },
	// {path:'/dd', name : 'home', component:()=>System.import('./components/Detail')}
Vue.use(VueRouter)

const routes=[
{path:'/', name : 'home', component:h1},
	{path:'/dd', name : 'home', component:h2}

]


const router = new VueRouter({
	mode: 'history',
	routes,
	hashback:true
	
})	
	

export default router