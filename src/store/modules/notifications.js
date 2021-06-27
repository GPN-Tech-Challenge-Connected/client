const getNotificationIdx = (state, id) => state.notifications.findIndex(i => i.id === id)

export default {
    state: {
        notifications: []
    },
    mutations: {
        createNotification(state, notification) {
            state.notifications.unshift(notification)
        },
        removeNotification(state, notificationId) {
            state.notifications.splice(getNotificationIdx(state, notificationId), 1)
        }
    },
    actions: {
        createNotification({commit}, data) {
            const id = +new Date()
            commit('createNotification', {...data, id})
            setTimeout(() => {
                commit('removeNotification', id)
            }, 5000)
        },
        closeNotification({commit}, notificationId) {
            commit('removeNotification', notificationId)
        }
    },
    getters: {
        notifications: state => state.notifications
    }
}