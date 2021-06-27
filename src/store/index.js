import Vue from 'vue'
import Vuex from 'vuex'
import notifications from './modules/notifications'
import user from './modules/user'
import dialog from './modules/dialog'
import equipment from './modules/equipment'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        notifications,
        user,
        dialog,
        equipment
    }
})

