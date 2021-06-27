export default {
    state: {
        data: {},
        dialog: false,
    },
    mutations: {
        setData(state, data) {
            state.data = data
        },
        clearData(state) {
            state.data = {}
        },
        toggleDialog(state, dialog) {
            state.dialog = dialog
        }
    },
    actions: {
        showDialog({commit}, data) {
            commit('setData', data)
            commit('toggleDialog', true)
        },
        hideDialog({commit}) {
            commit('clearData')
            commit('toggleDialog', false)
        }
    },
    getters: {
        dialog: state => state.dialog,
        dialogData: state => state.data
    }
}