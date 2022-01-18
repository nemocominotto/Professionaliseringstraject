<template>
  <div>
    <h1>Edit project</h1>
    <div>
      <form @submit.prevent="handleSubmit">
          <label>Title</label>
          <input v-model="title" type="text" required>

          <label>Details</label>
          <textarea v-model="details" required></textarea>

          <button>update project</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id
    }
  },
  mounted(){
    fetch(this.uri).then(res => res.json()).then(data => {
      this.title = data.title,
      this.details = data.details
    })
  },
  methods: {
    handleSubmit(){
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: this.title,
          details: this.details
        })
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>