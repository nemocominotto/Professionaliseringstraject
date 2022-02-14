import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'
import CreatePlaylist from '../views/playlist/CreatePlaylist.vue'
import PlaylistDetail from '../views/playlist/PlaylistDetail.vue'
import UserPlaylists from '../views/playlist/UserPlaylists.vue'

//route guard
import { projectAuth } from '../firebase/firebase-config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser

  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser

  if (user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
    beforeEnter: requireNoAuth
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetail',
    component: PlaylistDetail,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'PlaylistsUser',
    component: UserPlaylists,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
