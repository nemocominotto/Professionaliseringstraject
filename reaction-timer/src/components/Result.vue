<template>
  <div>
    <p>Reaction scrore: {{score}} ms</p>
    <p class="rank">{{rank}}</p>
  </div>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            rank: null
        }
    },
    mounted(){
        if (this.score < 250) {
            this.rank = 'Fast and furious!!'
        } else if (this.score < 400) {
            this.rank = 'Fast'
        } else {
            this.rank = 'Slow...'
        }
    }
}
</script>

<style>

</style>