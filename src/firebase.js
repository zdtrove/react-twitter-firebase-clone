import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCswcrHgyRNlYLiCNyrIg6un51SugMnYNU",
    authDomain: "react-twitter-clone-1f545.firebaseapp.com",
    projectId: "react-twitter-clone-1f545",
    storageBucket: "react-twitter-clone-1f545.appspot.com",
    messagingSenderId: "457885915698",
    appId: "1:457885915698:web:69c0c1f55f4db19aa23a2b",
    measurementId: "G-0SV93ZZX5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;