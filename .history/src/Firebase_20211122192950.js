
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestone } from "firebase/firestore"


const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDuYDzsPnyqdjiB9GMaLTrdUDp-KzwA8Qo",
    authDomain: "tik-tok-clone-8c0db.firebaseapp.com",
    projectId: "tik-tok-clone-8c0db",
    storageBucket: "tik-tok-clone-8c0db.appspot.com",
    messagingSenderId: "43780064684",
    appId: "1:43780064684:web:26a41ef5d10de198c56609",
    measurementId: "G-CZHVJHVPXE"
});

const auth = firebase.auth();

export { auth };