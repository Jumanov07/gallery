import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCesajkIceGBh1vebT1zAhpIIHCt4ymFe8",
  authDomain: "gallery-d47fa.firebaseapp.com",
  projectId: "gallery-d47fa",
  storageBucket: "gallery-d47fa.appspot.com",
  messagingSenderId: "826884323000",
  appId: "1:826884323000:web:01c1990550d69fc128e64d",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
