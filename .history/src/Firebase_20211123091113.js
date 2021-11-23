import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    ApiKey: "AIzaSyDuYDzsPnyqdjiB9GMaLTrdUDp-KzwA8Qo",
    authDomain: "tik-tok-clone-8c0db.firebaseapp.com",
    projectId: "tik-tok-clone-8c0db",
    storageBucket: "tik-tok-clone-8c0db.appspot.com",
    messagingSenderId: "43780064684",
    appId: "1:43780064684:web:26a41ef5d10de198c56609",
    measurementId: "G-CZHVJHVPXE"
    //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}



