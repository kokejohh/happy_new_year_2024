import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIRESTORE);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);