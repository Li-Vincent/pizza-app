
 const state={
        menuItems:{}
    }
    const   getters={
        getMenuItems: state=>state.menuItems
    }
    const mutations={
        setMenuItems(state,data){
            state.menuItems = data
        },
        removeItem(state,data){
            state.menuItems.forEach((item,index)=>{
                if(item==data){
                    state.menuItems.splice(index,1)
                }
            })
        },
        addItem(state,data){
            state.menuItems.push(data)
        }
    }
    const actions={
    }
