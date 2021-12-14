// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCvqB-D3U1uo9BSuG2FDtzVDCu8Ux1q6lo",
    authDomain: "facebook-clone-6e761.firebaseapp.com",
    projectId: "facebook-clone-6e761",
    storageBucket: "facebook-clone-6e761.appspot.com",
    messagingSenderId: "637426238570",
    appId: "1:637426238570:web:b68a7651d18446a1da7613",
    measurementId: "G-5CMZHE0N24"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;