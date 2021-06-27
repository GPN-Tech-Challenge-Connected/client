import api from "@/api/equipment"

export default {
    state: {
        equipmentList: [],
        equipmentsTotalAmount: null
    },
    mutations: {
        setList(state, list) {
            state.equipmentList = list
        },
        clearList(state) {
            state.equipmentList = []
        },
        setAmount(state, amount) {
            state.equipmentsTotalAmount = amount
        },
        clearAmount(state) {
            state.equipmentsTotalAmount = null
        }
    },
    actions: {
        async getEquipmentList({commit}, data) {
            commit('clearList')
            commit('clearAmount')
            const {items, count} = await api.get(data)
            commit('setList', items)
            commit('setAmount', count)
        }
    },
    getters: {
        equipmentList: state => state.equipmentList,
        equipmentsTotalAmount: state => state.equipmentsTotalAmount
    }
}