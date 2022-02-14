<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <h3>Signup</h3>
          <input type="text" required placeholder="username" v-model="displayName">
          <input type="email" placeholder="email" required v-model="email">
          <input type="password" placeholder="password" required minlength="6" v-model="password">
          <div v-if="error" class="error">{{error}}</div>
          <button v-if="!isPending">Signup</button>
          <button disabled v-if="isPending">Loading</button>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignUp from '../../api/useSignUp'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const { error, signup, isPending } = useSignUp()
        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                console.log('user registered')
                router.push({ name: 'Home' })
            }
        }

        return { email, password, displayName, isPending, error, handleSubmit }
    }
}
</script>

<style>

</style>