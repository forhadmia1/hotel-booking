// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNLhGidJhIPq1FxmmdshiWUIfo5fn8P0k",
    authDomain: "hotel-booking-7ec44.firebaseapp.com",
    projectId: "hotel-booking-7ec44",
    storageBucket: "hotel-booking-7ec44.appspot.com",
    messagingSenderId: "175415320318",
    appId: "1:175415320318:web:d184cd0b73b9f765b80faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;