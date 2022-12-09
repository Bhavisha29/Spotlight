import {initializeApp} from "firebase/app"
import {getFireStore} from "firebase/firestore"
// import "firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBusFMlZjfsC_yqA2BZceDOhY74T5wUVBg",
    authDomain: "spotlight-f814d.firebaseapp.com",
    databaseURL: "https://spotlight-f814d-default-rtdb.firebaseio.com",
    projectId: "spotlight-f814d",
    storageBucket: "spotlight-f814d.appspot.com",
    messagingSenderId: "542060497755",
    appId: "1:542060497755:web:1e20323c632494d3bb287e",
    measurementId: "G-T6V33BENCB"
  };

  export const firebaseapp = initializeApp(firebaseConfig)
  export const db = getFireStore(firebaseapp)