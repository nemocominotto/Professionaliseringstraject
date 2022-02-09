import { ref } from "vue"
import getPosts from "./getPosts"

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        //set time out
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        let data = await fetch('http://localhost:3000/posts/' + id)
        try {
            if (!data.ok) {
                throw Error('data not found')
            }
            post.value = await data.json()

        } catch (err) {
            error.value = err.value
        }
    }

    return { post, error, load }
}

export default getPost;
