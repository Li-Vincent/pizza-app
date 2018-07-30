export default {
    state: {
        currentUser: null
    },
    getters: {
        currentUser: state => state.currentUser
    },
    mutations: {
        userStatus(state, user) {
            if (user) {
                state.currentUser = user
                state.isLogin = true
            } else {
                state.currentUser = null
                state.isLogin = false
            }
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit("userStatus", user)
        }
    }

}