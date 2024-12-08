// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { updateProfile, updateEmail, deleteUser } from "firebase/auth";


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


//ajustes
export const updateUserProfile = async (user, displayName, email) => {
  if (displayName) {
    await updateProfile(user, { displayName });
  }
  if (email) {
    await updateEmail(user, email);
    await sendEmailVerification(user); // Envía el correo de verificación al nuevo email
  }
};

export const deleteUserAccount = async (user) => {
  await deleteUser(user);
};
