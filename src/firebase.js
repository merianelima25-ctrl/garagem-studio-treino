import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsEK8a5c0LqZRGVIIGujky-LZZypmjATw",
  authDomain: "garagem-studio-treino.firebaseapp.com",
  projectId: "garagem-studio-treino",
  storageBucket: "garagem-studio-treino.appspot.com",
  messagingSenderId: "103744010617",
  appId: "1:103744010617:web:62df1b5ebfb12a4f3c07a8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);