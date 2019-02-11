import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import Help from './components/Help.vue'
import Perfil from './components/Perfil.vue'
import Inbox from './components/Inbox.vue'
import Calendar from './components/Calendar.vue'
import Clients from './components/Clients.vue'
import Suppliers from './components/Suppliers.vue'
import Notes from './components/Notes.vue'
import Reports from './components/Reports.vue'
import Documents from './components/Documents.vue'
import Themes from './components/Themes.vue'
import Settings from './components/Settings.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router)


export default new Router({
    routes:[

        {
            path:'/signin',
            name:'signin',
            component: SignIn

        },

        {
            path:'/signup',
            name:'signup',
            component: SignUp

        },

      {
          path: '/',
          name: 'home',
          component: Home
      },

      {
          path: '/search',
          name: 'search',
          component: Search
      },
      {
          path: '/help',
          name: 'help',
          component: Help
      },
      {
          path: '/perfil',
          name: 'perfil',
          component: Perfil
      },      
      {
          path: '/inbox',
          name: 'inbox',
          component: Inbox
      },
      {
          path: '/calendar',
          name: 'calendar',
          component: Calendar
      },
      {
          path: '/clients',
          name: 'clients',
          component: Clients
      },      
      {
          path: '/suppliers',
          name: 'suppliers',
          component: Suppliers
      },
      {
          path: '/notes',
          name: 'notes',
          component: Notes
      },
      {
          path: '/reports',
          name: 'reports',
          component: Reports
      },
      {
          path: '/documents',
          name: 'documents',
          component: Documents
      },
      {
          path: '/themes',
          name: 'themes',
          component: Themes
      },
      {
          path: '/settings',
          name: 'settings',
          component: Settings
      },

    ]
})