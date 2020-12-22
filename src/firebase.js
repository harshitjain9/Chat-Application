import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFoeJkdiU-P5PUrp03IdrMB5JAqHfSLFY",
    authDomain: "chat-application-ceaf3.firebaseapp.com",
    databaseURL: "https://chat-application-ceaf3-default-rtdb.firebaseio.com",
    projectId: "chat-application-ceaf3",
    storageBucket: "chat-application-ceaf3.appspot.com",
    messagingSenderId: "249780050078",
    appId: "1:249780050078:web:3945e870832bcb03dc038f",
    measurementId: "G-XGLBJHVFSK"
};


firebase.initializeApp(firebaseConfig)

const db = firebase.database();
const auth = firebase.auth();
const firestore = firebase.firestore();

export { db, auth, firestore }



