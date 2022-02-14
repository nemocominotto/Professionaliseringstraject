<template>
  <div class="navbar">
      <nav>
          <h1><router-link :to="{ name: 'Home' }">Muso</router-link></h1>
          <div class="links">
              <div v-if="user">
                  <router-link :to="{ name: 'CreatePlaylist' }">Create playlist</router-link>
                  <router-link :to="{ name: 'PlaylistsUser' }">My playlist</router-link>
                  <button class="btn" @click="handleClick">Logout</button>
              </div>
              <div v-else>
                  <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }">Signup</router-link>
                  <router-link v-if="!user" class="btn" :to="{ name: 'Login' }">Log in</router-link>
              </div>
          </div>
      </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '../api/useLogout'
import getUser from '../api/getUser'

export default {
    setup() {
        const { logout } = useLogout()
        const { user } = getUser()

        const router = useRouter()

        const handleClick = async () => {
            await logout()
            console.log('user logged out')
            router.push({ name: 'Login' })
        }

        return { handleClick, user }
    }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background-color: #fff;
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>