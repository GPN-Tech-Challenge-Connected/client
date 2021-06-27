import axios from 'axios'
import store from "@/store/index";
import router from "@/plugins/router";

const api = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
})

const token = localStorage.getItem('token')
if (token) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
api.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        store.dispatch('logout')
        router.replace('/login')
    }
    return Promise.reject(error.response);
});

export default api