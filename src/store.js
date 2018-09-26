import Vue from 'vue'
import Vuex from 'vuex'

import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'
 
Vue.use(Vuex);

const state = {
	user: null,
	opendive: null,
	quickdive: null,
	quote: null,
	CategoryName: null,
	CategoryDescription: null,
	Sesssions: [],
	Bundles: [],
	Subcategorys: []
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
