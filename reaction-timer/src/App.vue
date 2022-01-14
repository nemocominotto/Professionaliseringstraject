<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying" >Play</button>
    <Block v-if="isPlaying" :delay="delay" @stop="endGame" />
    <Result v-if="showResult" :score="score" />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data(){
    return {
      isPlaying: false,
      showResult: false,
      delay: null,
      score: null
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.showResult = false
      this.isPlaying = true
      //console.log(this.delay)
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.showResult = true
      this.isPlaying = false
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
  color: #444;
  margin-top: 60px;
}
</style>
