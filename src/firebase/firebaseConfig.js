import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyBgxdCf546ZVAMvCZV23CUubG2-CeCEAiw",
  authDomain: "gamingdata-948fc.firebaseapp.com",
  databaseURL: "https://gamingdata-948fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gamingdata-948fc",
  storageBucket: "gamingdata-948fc.appspot.com",
  messagingSenderId: "481246275140",
  appId: "1:481246275140:web:c0264bc7b0937f20257e11",
  measurementId: "G-G9H4T0RWTF"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}