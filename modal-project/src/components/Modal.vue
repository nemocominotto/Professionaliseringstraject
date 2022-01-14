<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <h1>{{ header }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>


<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: lightcyan;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  h1 {
      color: darkblue;
  }
</style>