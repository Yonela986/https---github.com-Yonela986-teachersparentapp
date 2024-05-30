// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJPYxsFMI_ISVoByTpIVol_Nlg6ut6JjE",
  authDomain: "parentsteacherapp.firebaseapp.com",
  projectId: "parentsteacherapp",
  storageBucket: "parentsteacherapp.appspot.com",
  messagingSenderId: "1067568214322",
  appId: "1:1067568214322:web:120998cd62367efc5a272b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)