<template>
  <div>
      <div v-if="error">{{error}}</div>
      <div v-if="post" class="post">
          <h3>{{post.title}}</h3>
          <p class="pre">{{post.body}}</p>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div>
</template>

<script>
import getPost from '../api/getPost'
import Spinner from '../components/Spinner.vue'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()

        return { post, error }
    }
}
</script>

<style>
.post p {
    color: #444;
    line-height: 1.5rem;
    margin-top: 40px;
}

.post {
    min-width: 1200px;
    margin: 0 auto;
}

.pre {
    white-space: pre-wrap;
}
</style>