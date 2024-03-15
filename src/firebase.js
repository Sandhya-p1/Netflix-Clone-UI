import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHurFUZUZHeuGnOZjKWWG3iFvkZRiHhg8",
  authDomain: "netflix-clone-project-a695c.firebaseapp.com",
  projectId: "netflix-clone-project-a695c",
  storageBucket: "netflix-clone-project-a695c.appspot.com",
  messagingSenderId: "629171181232",
  appId: "1:629171181232:web:a0832970c92774511b4d75",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
