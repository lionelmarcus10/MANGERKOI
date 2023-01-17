// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvsB-YkXOZevg4c6JMVyx-BBP-dc6c2Rc",
  authDomain: "frig-s.firebaseapp.com",
  projectId: "frig-s",
  storageBucket: "frig-s.appspot.com",
  messagingSenderId: "694387567097",
  appId: "1:694387567097:web:bdb634a385b180a54ef528",
  measurementId: "G-YNWVHV0J67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);