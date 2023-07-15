// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY5kWWn1FgxwqQeHacq-ahovHFrGMkfpo",
  authDomain: "our-odyssey.firebaseapp.com",
  projectId: "our-odyssey",
  storageBucket: "our-odyssey.appspot.com",
  messagingSenderId: "959052027883",
  appId: "1:959052027883:web:45b0ef7a2baa88e37dabae",
  measurementId: "G-SEJXSNP0G6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;