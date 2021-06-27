import api from './index'

export default {
    async get(opts) {
        let url = `/api/Equipment?pageNumber=${opts.page}`
        if (opts.companyID) url += `&companyID=${opts.companyID}`
        if (opts.parentNumber) url += `&parentNumber=${opts.parentNumber}`
        if (opts.number) url += `&number=${opts.number}`
        const {data} = await api({
            url,
            method: 'GET',
        })
        return data
    },
}