<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <h3>Login</h3>
          <input type="email" placeholder="email" required v-model="email">
          <input type="password" placeholder="password" required minlength="6" v-model="password">
          <div v-if="error" class="error">{{error}}</div>
          <button v-if="!isPending">Login</button>
          <button disabled v-if="isPending">Loading</button>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../../api/useLogin'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const { error, login, isPending } = useLogin()
        const router = useRouter()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
                router.push({ name: 'Home' })
            }
        }

        return { email, password, error, isPending, handleSubmit }
    }
}
</script>

<style>

</style>