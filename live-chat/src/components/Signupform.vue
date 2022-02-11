<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <input type="text" required placeholder="display name" v-model="displayName">
          <input type="email" required placeholder="email" v-model="email">
          <input type="password" minlength="6" required placeholder="password" v-model="password">

          <div class="error">{{ error }}</div>

          <button>Sign up</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSignUp from '../api/useSignUp'

export default {
    setup(props, context){
        const { error, signup } = useSignUp()

        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                console.log('user is signed in')
                context.emit('signup')
            }
        }

        return { displayName, email, password, error, handleSubmit }
    }
}
</script>

<style>

</style>