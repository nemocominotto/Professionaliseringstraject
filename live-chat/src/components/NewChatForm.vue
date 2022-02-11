<template>
  <div>
      <form>
          <textarea
            placeholder="type a message and send..."
            v-model="message"
            @keypress.enter.prevent="handleSubmit"
          ></textarea>
          <div class="error">{{error}}</div>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../api/getUser'
import useCollection from '../api/useCollection'
import { timestamp } from '../firebase/firebase-config'

export default {
    setup(){
        const { user } = getUser()
        const { error, addDoc } = useCollection('messages')

        const message = ref('')

        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

            await addDoc(chat)
            if (!error.value) {
                message.value = ''
            }
        }

        return { handleSubmit, message, error }
    }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>