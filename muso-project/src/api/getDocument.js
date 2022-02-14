import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/firebase-config'

const getDocument = (collection, id) => {
    const document = ref(null)
    const error = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)

    const unsub = documentRef.onSnapshot((doc) => {
        if (doc.data()) {
            document.value = {...doc.data(), id: doc.id}
            error.value = null
        } else {
            error.value = 'no data'
        }
        
    }, (err) => {
        console.log(err.message)
        error.value = err.message
    })

    watchEffect((oninvalid) => {
        oninvalid(() => unsub())
    })

    return { document, error }
}

export default getDocument