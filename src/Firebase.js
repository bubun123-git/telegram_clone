import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_FiWQmPH8tALCzSoUcgNOFc1HPp2w1-4",
  authDomain: "telegram-cloned-73dd2.firebaseapp.com",
  projectId: "telegram-cloned-73dd2",
  storageBucket: "telegram-cloned-73dd2.appspot.com",
  messagingSenderId: "334979386712",
  appId: "1:334979386712:web:2d295e9171a97da50e692d",
  measurementId: "G-R2TQKS8982",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };
export default db;