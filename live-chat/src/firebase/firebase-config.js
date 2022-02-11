import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCtQzNFXJ3xRItTb0pWZ9glwTx5lLfnsZc",
    authDomain: "chatbox-91c44.firebaseapp.com",
    projectId: "chatbox-91c44",
    storageBucket: "chatbox-91c44.appspot.com",
    messagingSenderId: "965718215141",
    appId: "1:965718215141:web:8f54ad1bc697afdac0470c"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }