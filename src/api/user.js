import api from './index'

export default {
    async login(user) {
        const {data} = await api({
            url: `/login`,
            method: 'POST',
            data: user
        })
        return data
    },
}