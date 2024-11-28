// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa6nEl-INsedjU7bHTndBxWb8R2wF4cMQ",
  authDomain: "too-cars.firebaseapp.com",
  projectId: "too-cars",
  storageBucket: "too-cars.firebasestorage.app",
  messagingSenderId: "306384859589",
  appId: "1:306384859589:web:5a066c6da2defd3d975bac",
  measurementId: "G-3PF398S48H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);


export const login = ({email, password}) =>{
  return signInWithEmailAndPassword(auth, email, password)
}

//Registro
export const registro = ({email, password}) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

//Logout
export const logOut = () => signOut(auth)