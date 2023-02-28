import firebase from 'firebase/app';
import 'firebase/firestore';

const  firebaseConfig = {
  apiKey: "AIzaSyCp-phTJ0YHUM6SCzE8czbgxXkYp2MdBMI",
  authDomain: "react-hooks-blog-3bb4a.firebaseapp.com",
  projectId: "react-hooks-blog-3bb4a",
  storageBucket: "react-hooks-blog-3bb4a.appspot.com",
  messagingSenderId: "379326713520",
  appId: "1:379326713520:web:e63e07822aa4b3afd67575"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
