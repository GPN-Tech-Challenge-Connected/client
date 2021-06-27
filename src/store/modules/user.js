import userApi from "@/api/user"
import api from "@/api/index"
import router from "@/plugins/router";

export default {
    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {},
        company: JSON.parse(localStorage.getItem('company')) || {},
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setCompany(state, company) {
            state.company = company
        },
        setUser(state, user) {
            state.user = user
        },
        removeToken(state) {
            state.token = ''
        },
        removeUser(state) {
            state.user = {}
        },
        removeCompany(state) {
            state.company = {}
        }
    },
    actions: {
        async login({commit}, data) {
            const {token, user, company} = await userApi.login(data)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('company', JSON.stringify(company))
            api.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('setToken', token)
            commit('setUser', user)
            commit('setCompany', company)
        },
        logout({commit}) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('company')
            commit('removeToken')
            commit('removeUser')
            commit('removeCompany')
            router.push('/login')
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.token
    }
}