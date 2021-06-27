import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
