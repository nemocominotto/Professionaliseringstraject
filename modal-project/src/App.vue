<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModel">
      <Modal :header="header" @close="toggleModel" />
    </div>
    <button @click="toggleModel">open model</button>
  </div>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title: 'My first app',
      header: 'My first component',
      showModel: false
    }
  },
  methods: {
    toggleModel() {
      this.showModel = !this.showModel
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
