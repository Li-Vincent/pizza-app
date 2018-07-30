export const status = {
    state:{
        isLogin:false
    },
    getters:{
        isLogin: state=>state.isLogin
    },
    mutations:{
        userStatus(state,user){
            if(user){
                state.currentUser = user
                state.isLogin = true
            } else {
                state.currentUser = null
                state.isLogin = false
            }
        }
    },
    actions:{
        setUser({commit},user){
            commit("userStatus",user)
        }
    }
}