<template>
  <div class="user-playlist">
    <h2>My playlist</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
  </div>
</template>

<script>
import getCollection from '../../api/getCollection'
import getUser from '../../api/getUser'
import ListView from '../../components/ListView.vue'

export default {
  components: { ListView },
  setup(){
    const { user } = getUser()
    const { documents: playlists } = getCollection('playlists', ['userId', '==', user.value.uid])

    return { playlists }
  }
}
</script>

<style>

</style>