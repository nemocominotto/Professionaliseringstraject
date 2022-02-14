import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/firebase-config'

const getCollection = (collection, query) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
    
    if (query) {
        collectionRef = collectionRef.where(...query)
    }

    const unsub = collectionRef.onSnapshot((snap) => {
        let result = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
        })

        documents.value = result
        error.value = null
        
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = err.message
    })

    watchEffect((oninvalid) => {
        oninvalid(() => unsub())
    })

    return { documents, error }
}

export default getCollection