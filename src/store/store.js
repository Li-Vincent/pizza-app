import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import status from './modules/status'
import menu from './modules/menu'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        menu,status,users
    }
})

// export const store = new Vuex.Store({
//     state:{
//         menuItems:{},
//         currentUser:null,
//         isLogin:false
//     },
//     getters:{
//         getMenuItems: state=>state.menuItems,
//         currentUser: state=>state.currentUser,
//         isLogin: state=>state.isLogin
//     },
//     mutations:{
//         setMenuItems(state,data){
//             state.menuItems = data
//         },
//         removeItem(state,data){
//             state.menuItems.forEach((item,index)=>{
//                 if(item==data){
//                     state.menuItems.splice(index,1)
//                 }
//             })
//         },
//         addItem(state,data){
//             state.menuItems.push(data)
//         },
//         userStatus(state,user){
//             if(user){
//                 state.currentUser = user
//                 state.isLogin = true
//             } else {
//                 state.currentUser = null
//                 state.isLogin = false
//             }
//         }
//     },
//     actions:{
//         setUser({commit},user){
//             commit("userStatus",user)
//         }
//     }
// })