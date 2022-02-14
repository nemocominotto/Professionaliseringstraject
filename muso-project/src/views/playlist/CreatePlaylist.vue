<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create new playlist</h4>
      <input type="text" required placeholder="playlist title" v-model="title">
      <textarea required placeholder="playlist description..." v-model="description"></textarea>
      <label>Upload playlist cover</label>
      <input type="file" @change="handleChange">
      <div v-if="fileError" class="error">{{fileError}}</div>
      <button v-if="!isPending">Create</button>
      <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '../../api/useStorage'
import useCollection from '../../api/useCollection'
import getUser from '../../api/getUser'
import { timestamp } from '../../firebase/firebase-config'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false)

        const router = useRouter()

        const { url, filepath, uploadImage } = useStorage()
        const { error, addDoc } = useCollection('playlists')
        const { user } = getUser()

        const handleSubmit = async () => {
            if (file.value) {
                isPending.value = true
                await uploadImage(file.value)
                const res = await addDoc({
                    title: title.value,
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    coverUrl: url.value,
                    filepath: filepath.value,
                    songs: [],
                    createdAt: timestamp()
                })
                isPending.value = false
                router.push({ name: 'PlaylistDetail', params: { id: res.id } })
                if (!error.value) {
                    console.log('playlist added')
                }
                console.log('image uploaded', url.value)
            }
        }

        //alowd types
        const types = ['image/png', 'image/jpeg']

        const handleChange = (e) => {
            const selected = e.target.files[0]

            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'select image file, png or jpg'
            }
        }

        return { title, description, fileError, isPending, handleSubmit, handleChange }
    }
}
</script>

<style scoped>
 form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>