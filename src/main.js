import Vue from 'vue'
import store from './store'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from "bootstrap-vue"
import dashheader from './dashheader.vue'
import footer from './footer.vue'
import Home from './Home.vue'
import quickdive from './quickdive.vue'
import deepmain	from './deepmain.vue'
import individual from './individual.vue'
import profile from './profile.vue'
import Header from './Header.vue'
import Registration from './Registration.vue'
import Login from './Login.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-awesome/icons'
import firebase from 'firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faTwitter,faFacebookF)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.use(BootstrapVue)
Vue.use(VueRouter);

const routes = [
	{path: '/', component: dashheader, name: "index", meta: {authRequred: true}},
	{path: '/registration', name: 'registration', component: Registration },
	{path: '/login', name: 'login', component: Login },
	{path: '/home', component: Home , name:"home", meta: {authRequred: true} },
	{path: '/quickdive', component: quickdive , name: "quickdive", meta: {authRequred: true}},
	{path: '/deepmain', component: deepmain , name: "deepmain", meta: {authRequred: true}},
	{path: '/individual', component: individual , name: "individual", meta: {authRequred: true}},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});



Vue.component('app-dashheader',dashheader);
Vue.component('app-footer',footer);
Vue.component('app-header',Header);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  created () {
    	firebase.auth().onAuthStateChanged((user) => {
				 	if(user){
						 this.$router.push('/home')
				 	}else{
						 this.$router.push('/login')
				 	}   
     })
  },
  render: h => h(App)
})



router.beforeEach((to, from, next) => {
		 if (to.matched.some(record => record.meta.authRequred)) {
			firebase.auth().onAuthStateChanged((user) => {
					
				 	if(user){
						 next()	
				 	}else{
				 		next('login')		
				 	}   
				
		     })
 		} else {
		    next()
		}
})