import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// FIRESTORE_DATABASE = https://firebase.google.com/docs/web/setup#available-libraries
// STORAGE = https://console.firebase.google.com/project/gallery-cfb3b/storage/gallery-cfb3b.appspot.com/files

const firebaseConfig = {
  apiKey: "AIzaSyADgL8PSsuMRLFemjfxCapReT5UjisTRHw",
  authDomain: "gallery-cfb3b.firebaseapp.com",
  projectId: "gallery-cfb3b",
  storageBucket: "gallery-cfb3b.appspot.com",
  messagingSenderId: "774549623044",
  appId: "1:774549623044:web:8bdd9f59fa0fbf19d08051",
};

const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
