import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Account from './Account'
import Role from './Role'

export default new Vuex.Store({
  modules:{
    Account,
    Role
  }
})