import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAUhoXd1JHj8_b5aXXrQHCI-DB215ZiQoQ",
    authDomain: "muso-40d1e.firebaseapp.com",
    projectId: "muso-40d1e",
    storageBucket: "muso-40d1e.appspot.com",
    messagingSenderId: "826950015064",
    appId: "1:826950015064:web:07d7a4ee97e419f110922d"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }