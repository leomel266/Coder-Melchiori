// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQBOV5jomEdc1aQiXo__p0rXZH6-0TNqk",
  authDomain: "cd-ecommerce.firebaseapp.com",
  projectId: "cd-ecommerce",
  storageBucket: "cd-ecommerce.appspot.com",
  messagingSenderId: "545321038111",
  appId: "1:545321038111:web:2405994315f1f484d3402a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
const db = getFirestore(app)