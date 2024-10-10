import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByvSqvyqvcVyM6uvF7NubPp3Oy6aClO6w",
  authDomain: "react-notes-aa7bf.firebaseapp.com",
  projectId: "react-notes-aa7bf",
  storageBucket: "react-notes-aa7bf.appspot.com",
  messagingSenderId: "144573933919",
  appId: "1:144573933919:web:b1b3bb5b509df3b145aeea"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")


