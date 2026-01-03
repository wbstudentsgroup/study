// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApNw0I8uOaqgbaTSqlJJZTrZMmFWeE0B8",
  authDomain: "notes-405f1.firebaseapp.com",
  projectId: "notes-405f1",
  storageBucket: "notes-405f1.appspot.com",
  messagingSenderId: "990263941842",
  appId: "1:990263941842:web:4e0f814412d7806ab0b"
};

const app = initializeApp(firebaseConfig);

// exports used by index.html
export const auth = getAuth(app);
export const db = getFirestore(app);

// small flag for debugging
window._firebaseInited = true;
console.log("Firebase initialized");

