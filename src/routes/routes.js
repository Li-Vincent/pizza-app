import Home from './../components/Home'
import Menu from './../components/Menu'
import Admin from './../components/Admin'
import Login from './../components/Login'
import Register from './../components/Register'
import About from './../components/about/About'
import Guide from './../components/about/Guide'
import History from './../components/about/History'
import Delivery from './../components/about/Delivery'
import Contact from './../components/about/Contact'
import Phone from './../components/about/Phone'
import Person from './../components/about/Person'

export const routes = [
    { path:'/', name:'home', component:Home },
    { path:'/menu', name:'menu', component:Menu },
    { path:'/about', name:'about', component:About, redirect:'/guide',children: [
        {path:'/guide', name:'guide', component:Guide},
        {path:'/history', name:'history', component:History},
        {path:'/delivery', name:'delivery', component:Delivery},
        {path:'/contact', name:'contact', component:Contact, redirect:'/contact/phone', children:[
            {path:'/contact/phone', name:'phone', component:Phone},
            {path:'/contact/person', name:'person', component:Person}
        ]}
    ]},
    { path:'/admin', name:'admin', component:Admin },
    { path:'/login', name:'login', component:Login },
    { path:'/register', name:'register', component:Register },
    { path:'*', redirect:'/' }
]
    
