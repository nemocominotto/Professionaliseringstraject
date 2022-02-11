<template>
  <div>
      <div class="container">
          <Navbar />
          <Chatwindow />
          <NewChatForm />
      </div>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import Chatwindow from '../components/Chatwindow.vue'
import getUser from '../api/getUser'
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
    components: { Navbar, NewChatForm, Chatwindow },
    setup(){
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({name: 'Welcome'})
            }
        })
    }
}
</script>

<style>

</style>