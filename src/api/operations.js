import api from './index'

export default {
    async get(opts) {
        let url = `/api/Operations?pageNumber=${opts.page}`
        if (opts.companyID) url += `&companyID=${opts.companyID}`
        if (opts.typeID) url += `&typeID=${opts.typeID}`
        if (opts.equipmentNumber) url += `&equipmentNumber=${opts.equipmentNumber}`
        const {data} = await api({
            url,
            method: 'GET',
        })
        return data
    },
}