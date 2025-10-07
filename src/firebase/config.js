// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAs7WnTxWXjNydcFhDVgLWq65OhfzIsDGs",
    authDomain: "miniblog-dcb62.firebaseapp.com",
    projectId: "miniblog-dcb62",
    storageBucket: "miniblog-dcb62.firebasestorage.app",
    messagingSenderId: "397908374367",
    appId: "1:397908374367:web:99265687f67cee6198fcea",
    measurementId: "G-ERMQNX8RL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* Iniciando banco de dados */
const db = getFirestore(app);

export { db }
