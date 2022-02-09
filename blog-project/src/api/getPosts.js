import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        //set time out
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        try {
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error('no data loaded')
            }
            posts.value = await data.json()

        } catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPosts;
