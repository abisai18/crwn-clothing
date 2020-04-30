import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpHtNfZazG9281_x__iNL2wGHsj6iiSik",
    authDomain: "crwn-db-d4233.firebaseapp.com",
    databaseURL: "https://crwn-db-d4233.firebaseio.com",
    projectId: "crwn-db-d4233",
    storageBucket: "crwn-db-d4233.appspot.com",
    messagingSenderId: "161462769351",
    appId: "1:161462769351:web:69772da33c688e436650e2",
    measurementId: "G-XD9HG8LPBX"
  };


  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){

      const {displayName , email } = userAuth;
      const createdAt = new Date(); 
      
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      } catch (error) {
          console.log('Error creating user :' , error.message);
      }

    }

    return userRef;
    
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt: 'select-account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  