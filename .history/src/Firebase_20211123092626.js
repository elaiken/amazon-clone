// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB389mkQp0IbJcR-t1dIpZBm9ZTkAfkbE",
    authDomain: "clone-606e9.firebaseapp.com",
    projectId: "clone-606e9",
    storageBucket: "clone-606e9.appspot.com",
    messagingSenderId: "1006387476509",
    appId: "1:1006387476509:web:11a364435ecfd3759a2ef4",
    measurementId: "G-23VTCBM75G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





