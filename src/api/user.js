import api from './index'

export default {
    async login(user) {
        const {data} = await api({
            url: `/api/v1/panel/brands`,
            method: 'POST',
            data: user
        })
        return data
    },
}