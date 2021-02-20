import Vue from 'vue'
import Vuex from 'vuex'

import currentUser from './modules/currentUser'
import searchProjects from './modules/searchProjects'

Vue.use(Vuex)

export default new Vuex.Store({
	// state: {
	// },
	// mutations: {
	// },
	// actions: {
	// },
	// modules: {
	// }

	modules: {
      currentUser,
      searchProjects
   }

})