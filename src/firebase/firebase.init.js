// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDeXttArjz27hfton_Aoo4LVUa-bnH-yY",
  authDomain: "dragon-news-react-fireba-98273.firebaseapp.com",
  projectId: "dragon-news-react-fireba-98273",
  storageBucket: "dragon-news-react-fireba-98273.firebasestorage.app",
  messagingSenderId: "835343647710",
  appId: "1:835343647710:web:0d2eec9fdde9772033134f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth