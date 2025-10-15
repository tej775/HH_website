import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getStorage } from "firebase/storage";  
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADG7pnfwIn7CSQTXGKfC8lhuyGOUjwpIA",
  authDomain: "adminportal-f55de.firebaseapp.com",
  projectId: "adminportal-f55de",
  storageBucket: "adminportal-f55de.firebasestorage.app",
  messagingSenderId: "569026204719",
  appId: "1:569026204719:web:b3ab45cb237ec255c662da",
  measurementId: "G-G3XEFJDRBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

