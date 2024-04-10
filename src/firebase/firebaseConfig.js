// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLkZngSvJ0M8cdBu6WUIrGZ5DJjYGWLqg",
  authDomain: "b9a9-real-estate-protim1451.firebaseapp.com",
  projectId: "b9a9-real-estate-protim1451",
  storageBucket: "b9a9-real-estate-protim1451.appspot.com",
  messagingSenderId: "941172646895",
  appId: "1:941172646895:web:911d59dc5742238b464c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;