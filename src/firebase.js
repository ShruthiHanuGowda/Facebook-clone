import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe5wjTuugnYAR_2VxfvsTWOr5QFCQFJ7k",
  authDomain: "facebook-clone-edd58.firebaseapp.com",
  projectId: "facebook-clone-edd58",
  storageBucket: "facebook-clone-edd58.appspot.com",
  messagingSenderId: "469966670132",
  appId: "1:469966670132:web:590633fe48de8fe661fd61",
  measurementId: "G-V14WSMJYTN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
