
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAFJ3Yp4IcwMSCTGH2l_YyO_fWnfyYNoLg",
  authDomain: "tik-tok---jornada-f0309.firebaseapp.com",
  projectId: "tik-tok---jornada-f0309",
  storageBucket: "tik-tok---jornada-f0309.appspot.com",
  messagingSenderId: "279771391118",
  appId: "1:279771391118:web:7534b66e22739555b955df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;