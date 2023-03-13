import  firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6XMsEYwqwfIymz1ckBwCpJ2hX1WXb9xU",
    authDomain: "netflix-clone-3393d.firebaseapp.com",
    projectId: "netflix-clone-3393d",
    storageBucket: "netflix-clone-3393d.appspot.com",
    messagingSenderId: "91424093060",
    appId: "1:91424093060:web:d04420db0752be9c0c23d1",
    measurementId: "G-V7XZFF0KQZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;