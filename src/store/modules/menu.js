export default {
    state: {
        menuItems: {}
    },
    getters: {
        getMenuItems: state => state.menuItems
    },
    mutations: {
        setMenuItems(state, data) {
            state.menuItems = data
        },
        removeItem(state, data) {
            state.menuItems.forEach((item, index) => {
                if (item == data) {
                    state.menuItems.splice(index, 1)
                }
            })
        },
        addItem(state, data) {
            state.menuItems.push(data)
        }
    },
    actions: {
    }
}