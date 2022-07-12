import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oKB-ZtvpzSH0CmEQSiB7MnIuGwvDPfE",
  authDomain: "first-try-15a07.firebaseapp.com",
  databaseURL: "https://first-try-15a07.firebaseio.com",
  projectId: "first-try-15a07",
  storageBucket: "first-try-15a07.appspot.com",
  messagingSenderId: "476610929693",
  appId: "1:476610929693:web:ae4f294e94bc6fce3292f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
