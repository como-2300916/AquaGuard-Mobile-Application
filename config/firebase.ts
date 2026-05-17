import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANURp9RAbqG7PqqZrTClZq_D1Ua0IPOXE",
  authDomain: "aquaguard-81779.firebaseapp.com",
  projectId: "aquaguard-81779",
  storageBucket: "aquaguard-81779.firebasestorage.app",
  messagingSenderId: "982629199659",
  appId: "1:982629199659:web:ca3f481b7b56d7f87fdf6e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);