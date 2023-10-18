import { getFirestore } from 'firebase/firestore'
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyABEnLg7U-VZMWA5UUk8DCzdXGBvvn3GJ8",
    authDomain: "food-site-3f299.firebaseapp.com",
    projectId: "food-site-3f299",
    storageBucket: "food-site-3f299.appspot.com",
    messagingSenderId: "614686607849",
    appId: "1:614686607849:web:f61cc528fb8743de5d2378"
    };

// initialize fireBase
initializeApp(firebaseConfig);
// initialize fireStore
const db = getFirestore();

export { db } ;

