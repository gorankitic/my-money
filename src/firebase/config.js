import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBFHyGphUHkinyoC7xgTLlxRjmD03-gEG0",
    authDomain: "mymoney-82e2a.firebaseapp.com",
    projectId: "mymoney-82e2a",
    storageBucket: "mymoney-82e2a.appspot.com",
    messagingSenderId: "740322428927",
    appId: "1:740322428927:web:473c52d790fe9b65f0c9ca"
};

// Init Firebase
firebase.initializeApp(firebaseConfig)

// Init Service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }